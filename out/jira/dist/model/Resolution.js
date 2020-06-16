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
 * The Resolution model module.
 * @module model/Resolution
 * @version 1.4.0
 */
var Resolution = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Resolution</code>.
   * Details of an issue resolution.
   * @alias module:model/Resolution
   */
  function Resolution() {
    _classCallCheck(this, Resolution);

    Resolution.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Resolution, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Resolution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Resolution} obj Optional instance to populate.
     * @return {module:model/Resolution} The populated <code>Resolution</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Resolution();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Resolution;
}();
/**
 * The description of the issue resolution.
 * @member {String} description
 */


Resolution.prototype['description'] = undefined;
/**
 * The ID of the issue resolution.
 * @member {String} id
 */

Resolution.prototype['id'] = undefined;
/**
 * The name of the issue resolution.
 * @member {String} name
 */

Resolution.prototype['name'] = undefined;
/**
 * The URL of the issue resolution.
 * @member {String} self
 */

Resolution.prototype['self'] = undefined;
var _default = Resolution;
exports["default"] = _default;