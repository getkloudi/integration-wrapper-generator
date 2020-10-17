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
 * The IssueEventIssueLabels model module.
 * @module model/IssueEventIssueLabels
 * @version 1.4.4
 */
var IssueEventIssueLabels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventIssueLabels</code>.
   * @alias module:model/IssueEventIssueLabels
   */
  function IssueEventIssueLabels() {
    _classCallCheck(this, IssueEventIssueLabels);

    IssueEventIssueLabels.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventIssueLabels, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEventIssueLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssueLabels} obj Optional instance to populate.
     * @return {module:model/IssueEventIssueLabels} The populated <code>IssueEventIssueLabels</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventIssueLabels();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventIssueLabels;
}();
/**
 * @member {String} color
 */


IssueEventIssueLabels.prototype['color'] = undefined;
/**
 * @member {String} name
 */

IssueEventIssueLabels.prototype['name'] = undefined;
/**
 * @member {String} url
 */

IssueEventIssueLabels.prototype['url'] = undefined;
var _default = IssueEventIssueLabels;
exports["default"] = _default;