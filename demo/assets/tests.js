define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/components/as-calendar-test', ['exports', 'ember-qunit', 'ember', 'ember-calendar/test-helpers/all'], function (exports, _emberQunit, _ember, _emberCalendarTestHelpersAll) {

  (0, _emberQunit.moduleForComponent)('as-calendar', 'AsCalendarComponent', {
    integration: true,

    beforeEach: function beforeEach() {
      var _this = this;

      this.set('occurrences', _ember['default'].A());

      this.on('calendarAddOccurrence', function (occurrence) {
        _this.get('occurrences').pushObject(occurrence);
      });

      this.on('calendarRemoveOccurrence', function (occurrence) {
        _this.get('occurrences').removeObject(occurrence);
      });

      this.on('calendarUpdateOccurrence', function (occurrence, properties) {
        occurrence.setProperties(properties);
      });
    }
  });

  (0, _emberQunit.test)('Add an occurrence', function (assert) {
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'dayStartingTime', '9:00', 'dayEndingTime', '18:00', 'timeSlotDuration', '00:30', 'onAddOccurrence', ['subexpr', 'action', ['calendarAddOccurrence'], [], ['loc', [null, [8, 22], [8, 54]]]], 'onUpdateOccurrence', ['subexpr', 'action', ['calendarUpdateOccurrence'], [], ['loc', [null, [9, 25], [9, 60]]]], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [10, 25], [10, 60]]]]], ['loc', [null, [2, 4], [10, 62]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(_ember['default'].$('.as-calendar-occurrence').length, 0, 'it shows an empty calendar');

    (0, _emberCalendarTestHelpersAll.selectTime)({ day: 0, timeSlot: 0 });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').length, 1, 'it adds the occurrence to the calendar');

    assert.ok(this.get('occurrences.firstObject').startsAt instanceof Date, 'startsAt is a Date');

    assert.ok(this.get('occurrences.firstObject').endsAt instanceof Date, 'endsAt is a Date');
  });

  (0, _emberQunit.test)('Remove an occurrence', function (assert) {
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'dayStartingTime', '9:00', 'dayEndingTime', '18:00', 'timeSlotDuration', '00:30', 'onAddOccurrence', ['subexpr', 'action', ['calendarAddOccurrence'], [], ['loc', [null, [8, 22], [8, 54]]]], 'onUpdateOccurrence', ['subexpr', 'action', ['calendarUpdateOccurrence'], [], ['loc', [null, [9, 25], [9, 60]]]], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [10, 25], [10, 60]]]]], ['loc', [null, [2, 4], [10, 62]]]]],
        locals: [],
        templates: []
      };
    })()));

    (0, _emberCalendarTestHelpersAll.selectTime)({ day: 0, timeSlot: 0 });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').length, 1, 'it adds the occurrence to the calendar');

    _ember['default'].run(function () {
      _ember['default'].$('.as-calendar-occurrence .as-calendar-occurrence__remove').click();
    });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').length, 0, 'it removes the occurrence from the calendar');
  });

  (0, _emberQunit.test)('Resize an occurrence', function (assert) {
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 12,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'dayStartingTime', '9:00', 'dayEndingTime', '18:00', 'timeSlotDuration', '00:30', 'defaultOccurrenceDuration', '00:30', 'onAddOccurrence', ['subexpr', 'action', ['calendarAddOccurrence'], [], ['loc', [null, [9, 22], [9, 54]]]], 'onUpdateOccurrence', ['subexpr', 'action', ['calendarUpdateOccurrence'], [], ['loc', [null, [10, 25], [10, 60]]]], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [11, 25], [11, 60]]]]], ['loc', [null, [2, 4], [11, 62]]]]],
        locals: [],
        templates: []
      };
    })()));

    (0, _emberCalendarTestHelpersAll.selectTime)({ day: 0, timeSlot: 0 });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').length, 1, 'it adds the occurrence to the calendar');

    (0, _emberCalendarTestHelpersAll.resizeOccurrence)(_ember['default'].$('.as-calendar-occurrence'), { timeSlots: 2 });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').height(), (0, _emberCalendarTestHelpersAll.timeSlotHeight)() * 3, 'it resizes the occurrence');
  });

  (0, _emberQunit.test)('Drag an occurrence', function (assert) {
    var pixelAccuracy = 5;
    var assertAlmostEqual = function assertAlmostEqual(first, second, message) {
      assert.ok(Math.abs(first - second) < pixelAccuracy, message);
    };

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'dayStartingTime', '9:00', 'dayEndingTime', '18:00', 'timeSlotDuration', '00:30', 'onAddOccurrence', ['subexpr', 'action', ['calendarAddOccurrence'], [], ['loc', [null, [8, 22], [8, 54]]]], 'onUpdateOccurrence', ['subexpr', 'action', ['calendarUpdateOccurrence'], [], ['loc', [null, [9, 25], [9, 60]]]], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [10, 25], [10, 60]]]]], ['loc', [null, [2, 4], [10, 62]]]]],
        locals: [],
        templates: []
      };
    })()));

    (0, _emberCalendarTestHelpersAll.selectTime)({ day: 0, timeSlot: 0 });

    assert.equal(this.$('.as-calendar-occurrence').length, 1, 'it adds the occurrence to the calendar');

    (0, _emberCalendarTestHelpersAll.dragOccurrence)(this.$('.as-calendar-occurrence'), { days: 2, timeSlots: 4 });

    var $occurrence = this.$('.as-calendar-occurrence');

    var dayOffset = $occurrence.offset().left - this.$('.as-calendar-timetable-content').offset().left;

    var timeSlotOffset = $occurrence.offset().top - this.$('.as-calendar-timetable-content').offset().top;

    assertAlmostEqual(dayOffset, (0, _emberCalendarTestHelpersAll.dayWidth)() * 2, 'it drags the occurrence to the correct day');

    assertAlmostEqual(timeSlotOffset, (0, _emberCalendarTestHelpersAll.timeSlotHeight)() * 4, 'it drags the occurrence to the correct timeslot');

    assertAlmostEqual($occurrence.height(), (0, _emberCalendarTestHelpersAll.timeSlotHeight)() * 2, 'it keeps the duration of the occurrence');
  });

  (0, _emberQunit.test)('Change time zone', function (assert) {
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 13,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'timeZone', 'Europe/London', 'dayStartingTime', '9:00', 'dayEndingTime', '18:00', 'timeSlotDuration', '00:30', 'defaultTimeZoneQuery', 'Rome', 'onAddOccurrence', ['subexpr', 'action', ['calendarAddOccurrence'], [], ['loc', [null, [10, 22], [10, 54]]]], 'onUpdateOccurrence', ['subexpr', 'action', ['calendarUpdateOccurrence'], [], ['loc', [null, [11, 25], [11, 60]]]], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [12, 25], [12, 60]]]]], ['loc', [null, [2, 4], [12, 62]]]]],
        locals: [],
        templates: []
      };
    })()));

    (0, _emberCalendarTestHelpersAll.selectTime)({ day: 0, timeSlot: 0 });

    assert.equal(_ember['default'].$('.as-calendar-occurrence').position().top, 0, 'it shows the occurrence in the UTC time zone');

    (0, _emberCalendarTestHelpersAll.selectTimeZone)('Rome');

    assert.equal(_ember['default'].$('.as-calendar-occurrence').position().top, (0, _emberCalendarTestHelpersAll.timeSlotHeight)() * 2, 'it shows the occurrence in the Rome time zone');
  });

  (0, _emberQunit.test)('Change week', function (assert) {

    var weekIndex = 0;

    this.on('navigateWeek', function (index) {
      weekIndex += index;
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['inline', 'as-calendar', [], ['title', 'Ember Calendar', 'occurrences', ['subexpr', '@mut', [['get', 'occurrences', ['loc', [null, [4, 18], [4, 29]]]]], [], []], 'onRemoveOccurrence', ['subexpr', 'action', ['calendarRemoveOccurrence'], [], ['loc', [null, [5, 25], [5, 60]]]], 'onNavigateWeek', ['subexpr', 'action', ['navigateWeek'], [], ['loc', [null, [6, 21], [6, 44]]]]], ['loc', [null, [2, 4], [6, 46]]]]],
        locals: [],
        templates: []
      };
    })()));

    (0, _emberCalendarTestHelpersAll.selectNextWeek)();

    assert.equal(weekIndex, 1, 'it navigates to the next week');

    (0, _emberCalendarTestHelpersAll.selectPreviousWeek)();

    assert.equal(weekIndex, 0, 'it navigates back to the current week');
  });
});
define('dummy/tests/unit/components/as-calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/as-calendar-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/as-calendar-test.js should pass jshint.');
  });
});
define('dummy/tests/views/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - views');
  QUnit.test('views/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'views/index.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map