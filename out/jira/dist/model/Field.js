"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldLastUsed = _interopRequireDefault(require("./FieldLastUsed"));

var _JsonTypeBean = _interopRequireDefault(require("./JsonTypeBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Field model module.
 * @module model/Field
 * @version 1.4.0
 */
var Field = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Field</code>.
   * Details of a field.
   * @alias module:model/Field
   * @param id {String} The ID of the field.
   * @param name {String} The name of the field.
   */
  function Field(id, name) {
    _classCallCheck(this, Field);

    Field.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Field, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Field} obj Optional instance to populate.
     * @return {module:model/Field} The populated <code>Field</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Field();

        if (data.hasOwnProperty('contextsCount')) {
          obj['contextsCount'] = _ApiClient["default"].convertToType(data['contextsCount'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isLocked')) {
          obj['isLocked'] = _ApiClient["default"].convertToType(data['isLocked'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('lastUsed')) {
          obj['lastUsed'] = _FieldLastUsed["default"].constructFromObject(data['lastUsed']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _JsonTypeBean["default"].constructFromObject(data['schema']);
        }

        if (data.hasOwnProperty('screensCount')) {
          obj['screensCount'] = _ApiClient["default"].convertToType(data['screensCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Field;
}();
/**
 * Number of contexts where the field is used.
 * @member {Number} contextsCount
 */


Field.prototype['contextsCount'] = undefined;
/**
 * The description of the field.
 * @member {String} description
 */

Field.prototype['description'] = undefined;
/**
 * The ID of the field.
 * @member {String} id
 */

Field.prototype['id'] = undefined;
/**
 * Whether the field is locked.
 * @member {Boolean} isLocked
 */

Field.prototype['isLocked'] = undefined;
/**
 * The key of the field.
 * @member {String} key
 */

Field.prototype['key'] = undefined;
/**
 * @member {module:model/FieldLastUsed} lastUsed
 */

Field.prototype['lastUsed'] = undefined;
/**
 * The name of the field.
 * @member {String} name
 */

Field.prototype['name'] = undefined;
/**
 * @member {module:model/JsonTypeBean} schema
 */

Field.prototype['schema'] = undefined;
/**
 * Number of screens where the field is used.
 * @member {Number} screensCount
 */

Field.prototype['screensCount'] = undefined;
var _default = Field;
exports["default"] = _default;