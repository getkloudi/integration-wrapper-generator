"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueFieldOptionScopeBean = _interopRequireDefault(require("./IssueFieldOptionScopeBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueFieldOptionConfiguration model module.
 * @module model/IssueFieldOptionConfiguration
 * @version 1.4.0
 */
var IssueFieldOptionConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueFieldOptionConfiguration</code>.
   * Details of the projects the option is available in.
   * @alias module:model/IssueFieldOptionConfiguration
   */
  function IssueFieldOptionConfiguration() {
    _classCallCheck(this, IssueFieldOptionConfiguration);

    IssueFieldOptionConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueFieldOptionConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueFieldOptionConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFieldOptionConfiguration} obj Optional instance to populate.
     * @return {module:model/IssueFieldOptionConfiguration} The populated <code>IssueFieldOptionConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueFieldOptionConfiguration();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], ['String']);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _IssueFieldOptionScopeBean["default"]);
        }
      }

      return obj;
    }
  }]);

  return IssueFieldOptionConfiguration;
}();
/**
 * DEPRECATED
 * @member {Array.<module:model/IssueFieldOptionConfiguration.AttributesEnum>} attributes
 */


IssueFieldOptionConfiguration.prototype['attributes'] = undefined;
/**
 * Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
 * @member {module:model/IssueFieldOptionScopeBean} scope
 */

IssueFieldOptionConfiguration.prototype['scope'] = undefined;
/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */

IssueFieldOptionConfiguration['AttributesEnum'] = {
  /**
   * value: "notSelectable"
   * @const
   */
  "notSelectable": "notSelectable",

  /**
   * value: "defaultValue"
   * @const
   */
  "defaultValue": "defaultValue"
};
var _default = IssueFieldOptionConfiguration;
exports["default"] = _default;