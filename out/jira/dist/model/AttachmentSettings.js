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
 * The AttachmentSettings model module.
 * @module model/AttachmentSettings
 * @version 1.4.0
 */
var AttachmentSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentSettings</code>.
   * Details of the instance&#39;s attachment settings.
   * @alias module:model/AttachmentSettings
   */
  function AttachmentSettings() {
    _classCallCheck(this, AttachmentSettings);

    AttachmentSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentSettings} obj Optional instance to populate.
     * @return {module:model/AttachmentSettings} The populated <code>AttachmentSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentSettings();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('uploadLimit')) {
          obj['uploadLimit'] = _ApiClient["default"].convertToType(data['uploadLimit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AttachmentSettings;
}();
/**
 * Whether the ability to add attachments is enabled.
 * @member {Boolean} enabled
 */


AttachmentSettings.prototype['enabled'] = undefined;
/**
 * The maximum size of attachments permitted, in bytes.
 * @member {Number} uploadLimit
 */

AttachmentSettings.prototype['uploadLimit'] = undefined;
var _default = AttachmentSettings;
exports["default"] = _default;