import Ember from 'ember';
import ComponentCalendar from 'ember-calendar/models/component-calendar';

export default Ember.Component.extend({
  classNameBindings: [':as-calendar'],
  tagName: 'section',

  dateFormatDefaults: {
    dayHeader: 'MMMM DD, YYYY',
    dayContent: 'dddd',
    weekHeaderStart: 'ddd D MMM',
    weekHeaderEnd: 'ddd D MMM, YYYY',
    weekContent: 'ddd D',
    monthHeader: 'MMMM YYYY',
    monthContent: 'ddd'
  },
  dateFormatOptions: null,
  dayEndingTime: '22:00',
  dayStartingTime: '8:00',
  defaultOccurrenceDuration: '1:00',
  defaultOccurrenceTitle: 'New event',
  defaultOccurrenceType: '',
  isEditing: true,
  model: null,
  occurrences: null,
  showHeader: true,
  startingDate: null,
  timeSlotDuration: '00:30',
  timeSlotHeight: 20,
  monthTimeSlotHeight: 20,
  title: null,
  type: 'week',

  _initializeModel: Ember.on('init', function() {
    // merge dateFormatDefaults defaults with anything that's passed in
    this.set('dateFormatOptions', Object.assign(this.get('dateFormatDefaults'), this.get('dateFormatOptions')));

    this.set('model', ComponentCalendar.create({ component: this }));
  }),

  actions: {
    addOccurrence: function (time) {
      if (this.get('model.isMonthView')) { return false; }

      var occurrence = this.get('model').createOccurrence({
        startsAt: time.toDate()
      });

      this.attrs['onAddOccurrence'](occurrence.get('content'));
    },

    onNavigate: function(index) {
      if (this.attrs['onNavigate']) {
        this.attrs['onNavigate'](index);
      }
    },

    navigateToDay: function (day) {
      this.get('model').goToDayView(day);
    },

    changeType: function (type) {
      this.get('model').changeType(type);

      if (this.attrs['onTypeChange']) {
        this.attrs['onTypeChange'](type);
      }
    }
  }
});
