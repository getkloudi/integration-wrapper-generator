"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _IssueAttachmentAllOf = _interopRequireDefault(require("./IssueAttachmentAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueAttachment model module.
 * @module model/IssueAttachment
 * @version 1.2.0
 */
var IssueAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueAttachment</code>.
   * @alias module:model/IssueAttachment
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/IssueAttachmentAllOf
   * @param type {String} 
   */
  function IssueAttachment(type) {
    _classCallCheck(this, IssueAttachment);

    _ModelObject["default"].initialize(this, type);

    _IssueAttachmentAllOf["default"].initialize(this);

    IssueAttachment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueAttachment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>IssueAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAttachment} obj Optional instance to populate.
     * @return {module:model/IssueAttachment} The populated <code>IssueAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueAttachment();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _IssueAttachmentAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueAttachment;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


IssueAttachment.prototype['links'] = undefined;
/**
 * @member {String} name
 */

IssueAttachment.prototype['name'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement IssueAttachmentAllOf interface:

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_IssueAttachmentAllOf["default"].prototype['links'] = undefined;
/**
 * @member {String} name
 */

_IssueAttachmentAllOf["default"].prototype['name'] = undefined;
var _default = IssueAttachment;
exports["default"] = _default;