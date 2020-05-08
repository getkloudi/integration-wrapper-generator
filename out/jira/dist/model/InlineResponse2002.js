"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.1.0
 */
var InlineResponse2002 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * 
   * @alias module:model/InlineResponse2002
   * @param defaultGroups {Array.<Object>} 
   * @param defined {Boolean} 
   * @param groups {Array.<Object>} 
   * @param hasUnlimitedSeats {Boolean} 
   * @param key {String} 
   * @param name {String} 
   * @param numberOfSeats {Number} 
   * @param platform {Boolean} 
   * @param remainingSeats {Number} 
   * @param selectedByDefault {Boolean} 
   * @param userCount {Number} 
   * @param userCountDescription {String} 
   */
  function InlineResponse2002(defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription) {
    _classCallCheck(this, InlineResponse2002);

    InlineResponse2002.initialize(this, defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2002, null, [{
    key: "initialize",
    value: function initialize(obj, defaultGroups, defined, groups, hasUnlimitedSeats, key, name, numberOfSeats, platform, remainingSeats, selectedByDefault, userCount, userCountDescription) {
      obj['defaultGroups'] = defaultGroups;
      obj['defined'] = defined;
      obj['groups'] = groups;
      obj['hasUnlimitedSeats'] = hasUnlimitedSeats;
      obj['key'] = key;
      obj['name'] = name;
      obj['numberOfSeats'] = numberOfSeats;
      obj['platform'] = platform;
      obj['remainingSeats'] = remainingSeats;
      obj['selectedByDefault'] = selectedByDefault;
      obj['userCount'] = userCount;
      obj['userCountDescription'] = userCountDescription;
    }
    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002();

        if (data.hasOwnProperty('defaultGroups')) {
          obj['defaultGroups'] = _ApiClient["default"].convertToType(data['defaultGroups'], [Object]);
        }

        if (data.hasOwnProperty('defined')) {
          obj['defined'] = _ApiClient["default"].convertToType(data['defined'], 'Boolean');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [Object]);
        }

        if (data.hasOwnProperty('hasUnlimitedSeats')) {
          obj['hasUnlimitedSeats'] = _ApiClient["default"].convertToType(data['hasUnlimitedSeats'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('numberOfSeats')) {
          obj['numberOfSeats'] = _ApiClient["default"].convertToType(data['numberOfSeats'], 'Number');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'Boolean');
        }

        if (data.hasOwnProperty('remainingSeats')) {
          obj['remainingSeats'] = _ApiClient["default"].convertToType(data['remainingSeats'], 'Number');
        }

        if (data.hasOwnProperty('selectedByDefault')) {
          obj['selectedByDefault'] = _ApiClient["default"].convertToType(data['selectedByDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('userCount')) {
          obj['userCount'] = _ApiClient["default"].convertToType(data['userCount'], 'Number');
        }

        if (data.hasOwnProperty('userCountDescription')) {
          obj['userCountDescription'] = _ApiClient["default"].convertToType(data['userCountDescription'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2002;
}();
/**
 * @member {Array.<Object>} defaultGroups
 */


InlineResponse2002.prototype['defaultGroups'] = undefined;
/**
 * @member {Boolean} defined
 */

InlineResponse2002.prototype['defined'] = undefined;
/**
 * @member {Array.<Object>} groups
 */

InlineResponse2002.prototype['groups'] = undefined;
/**
 * @member {Boolean} hasUnlimitedSeats
 */

InlineResponse2002.prototype['hasUnlimitedSeats'] = undefined;
/**
 * @member {String} key
 */

InlineResponse2002.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2002.prototype['name'] = undefined;
/**
 * @member {Number} numberOfSeats
 */

InlineResponse2002.prototype['numberOfSeats'] = undefined;
/**
 * @member {Boolean} platform
 */

InlineResponse2002.prototype['platform'] = undefined;
/**
 * @member {Number} remainingSeats
 */

InlineResponse2002.prototype['remainingSeats'] = undefined;
/**
 * @member {Boolean} selectedByDefault
 */

InlineResponse2002.prototype['selectedByDefault'] = undefined;
/**
 * @member {Number} userCount
 */

InlineResponse2002.prototype['userCount'] = undefined;
/**
 * @member {String} userCountDescription
 */

InlineResponse2002.prototype['userCountDescription'] = undefined;
var _default = InlineResponse2002;
exports["default"] = _default;