import moment from 'moment';
import Ember from 'ember';
import computedDuration from 'ember-calendar/macros/computed-duration';

export default Ember.Component.extend({
  classNameBindings: [':as-calendar-timetable', 'model.isMonthView:as-calendar-timetable--month', 'model.isWeekView:as-calendar-timetable--week', 'model.isDayView:as-calendar-timetable--day'],
  tagName: 'section',

  days: Ember.computed.oneWay('model.days'),
  model: null,
  timeSlotHeight: null,
  timeSlots: Ember.computed.oneWay('model.timeSlots'),
  contentComponent: null,
  dayWidth: Ember.computed.oneWay('contentComponent.dayWidth'),
  referenceElement: Ember.computed.oneWay('contentComponent.element'),

  isTimerOn: false,
  timeInterval: null,

  startOfWeek: moment().startOf('isoWeek').day(),

  _dayStartingTime: Ember.computed('model.showAllHours', 'model.dayStartingTime', function () {
    return this.get('model.showAllHours') ? moment.duration(0) : this.get('model.dayStartingTime');
  }),
  _dayEndingTime: Ember.computed('model.showAllHours', 'model.dayEndingTime', function () {
    return this.get('model.showAllHours') ? moment.duration(1, 'day') : this.get('model.dayEndingTime');
  }),
  now: moment(),
  currentDayNumber: Ember.computed('now', function () {
    const nowDayNumber = this.get('now').day();
    const startOfWeek = this.get('startOfWeek');

    return nowDayNumber === 0 ? startOfWeek : nowDayNumber - startOfWeek;
  }),
  nowTime: Ember.computed('now', function () {
    return this.get('now').format('H:mm');
  }),
  computedNowTime: computedDuration('nowTime'),
  timeFromStartOfTheDay: Ember.computed('computedNowTime', '_dayStartingTime', function () {
    return this.get('computedNowTime').asMilliseconds() - this.get('_dayStartingTime').asMilliseconds();
  }),
  dayDuration: Ember.computed('_dayStartingTime', '_dayEndingTime', function () {
    return this.get('_dayEndingTime').asMilliseconds() - this.get('_dayStartingTime').asMilliseconds();
  }),

  hourMarkerStyle: Ember.computed('timeFromStartOfTheDay', 'dayDuration', function () {
    const timeFromStartOfTheDay = this.get('timeFromStartOfTheDay');
    const dayDuration = this.get('dayDuration');

    let topPercentage = 0;
    let visibility = 'visible';

    if (timeFromStartOfTheDay && dayDuration) {
      topPercentage = (timeFromStartOfTheDay / dayDuration) * 100;
    } else {
      visibility = 'hidden';
    }

    return Ember.String.htmlSafe(`top: ${topPercentage}%; visibility: ${visibility}`);
  }),

  labeledTimeSlots: Ember.computed('timeSlots.[]', 'now', function () {
    const now = this.get('now');
    const startOfDay = moment().startOf('day');

    return this.get('timeSlots')
      .filter(function (_, index) {
        return (index % 2) === 0;
      })
      .map((timeSlot) => {
        const value = startOfDay.clone().add(timeSlot.get('time').valueOf(), 'milliseconds');
        const diff = now.diff(value);
        const ONE_HOUR = 60 * 60 * 1000;

        return {
          label: value.format('H:mm'),
          isHidden: diff > 0 && diff < ONE_HOUR // hide label if its close to the now time marker
        };
      });
  }),

  timeSlotLabelListStyle: Ember.computed('timeSlotHeight', function() {
    var timeSlotHeight = this.get('timeSlotHeight');

    return Ember.String.htmlSafe(`line-height: ${timeSlotHeight * 2}px;`);
  }),

  timeSlotLabelStyle: Ember.computed('timeSlotHeight', function() {
    return Ember.String.htmlSafe(`height: ${2 * this.get('timeSlotHeight')}px;`);
  }),
  init() {
    this._super(...arguments);

    const that = this;
    const timer = () => {
      if (!that.get('isTimerOn')) {
        return false;
      }

      Ember.run.later(function () {
        that.set('now', moment());
        timer();
      }, 60 * 1000);
    };

    this.set('isTimerOn', true);
    timer();
  },
  willDestroyElement() {
    this._super(...arguments);
    this.set('isTimerOn', false);
  },

  actions: {
    goTo: function (day) {
      if (this.attrs['onNavigateToDay']) {
        this.attrs['onNavigateToDay'](day);
      }
    }
  }
});
