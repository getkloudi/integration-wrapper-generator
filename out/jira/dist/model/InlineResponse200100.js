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
 * The InlineResponse200100 model module.
 * @module model/InlineResponse200100
 * @version 1.3.0
 */
var InlineResponse200100 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200100</code>.
   * @alias module:model/InlineResponse200100
   * @param _default {Boolean} 
   * @param description {String} 
   * @param lastModifiedDate {String} 
   * @param lastModifiedUser {String} 
   * @param lastModifiedUserAccountId {String} 
   * @param name {String} 
   * @param steps {Number} 
   */
  function InlineResponse200100(_default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps) {
    _classCallCheck(this, InlineResponse200100);

    InlineResponse200100.initialize(this, _default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200100, null, [{
    key: "initialize",
    value: function initialize(obj, _default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps) {
      obj['default'] = _default;
      obj['description'] = description;
      obj['lastModifiedDate'] = lastModifiedDate;
      obj['lastModifiedUser'] = lastModifiedUser;
      obj['lastModifiedUserAccountId'] = lastModifiedUserAccountId;
      obj['name'] = name;
      obj['steps'] = steps;
    }
    /**
     * Constructs a <code>InlineResponse200100</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200100} obj Optional instance to populate.
     * @return {module:model/InlineResponse200100} The populated <code>InlineResponse200100</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200100();

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedDate')) {
          obj['lastModifiedDate'] = _ApiClient["default"].convertToType(data['lastModifiedDate'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUser')) {
          obj['lastModifiedUser'] = _ApiClient["default"].convertToType(data['lastModifiedUser'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUserAccountId')) {
          obj['lastModifiedUserAccountId'] = _ApiClient["default"].convertToType(data['lastModifiedUserAccountId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200100;
}();
/**
 * @member {Boolean} default
 */


InlineResponse200100.prototype['default'] = undefined;
/**
 * @member {String} description
 */

InlineResponse200100.prototype['description'] = undefined;
/**
 * @member {String} lastModifiedDate
 */

InlineResponse200100.prototype['lastModifiedDate'] = undefined;
/**
 * @member {String} lastModifiedUser
 */

InlineResponse200100.prototype['lastModifiedUser'] = undefined;
/**
 * @member {String} lastModifiedUserAccountId
 */

InlineResponse200100.prototype['lastModifiedUserAccountId'] = undefined;
/**
 * @member {String} name
 */

InlineResponse200100.prototype['name'] = undefined;
/**
 * @member {Number} steps
 */

InlineResponse200100.prototype['steps'] = undefined;
var _default2 = InlineResponse200100;
exports["default"] = _default2;