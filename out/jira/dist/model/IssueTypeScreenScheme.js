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
 * The IssueTypeScreenScheme model module.
 * @module model/IssueTypeScreenScheme
 * @version 1.4.0
 */
var IssueTypeScreenScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeScreenScheme</code>.
   * Details of an issue type screen scheme.
   * @alias module:model/IssueTypeScreenScheme
   * @param id {String} The ID of the issue type screen scheme.
   * @param name {String} The name of the issue type screen scheme.
   */
  function IssueTypeScreenScheme(id, name) {
    _classCallCheck(this, IssueTypeScreenScheme);

    IssueTypeScreenScheme.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeScreenScheme, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>IssueTypeScreenScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenScheme} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenScheme} The populated <code>IssueTypeScreenScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeScreenScheme();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeScreenScheme;
}();
/**
 * The description of the issue type screen scheme.
 * @member {String} description
 */


IssueTypeScreenScheme.prototype['description'] = undefined;
/**
 * The ID of the issue type screen scheme.
 * @member {String} id
 */

IssueTypeScreenScheme.prototype['id'] = undefined;
/**
 * The name of the issue type screen scheme.
 * @member {String} name
 */

IssueTypeScreenScheme.prototype['name'] = undefined;
var _default = IssueTypeScreenScheme;
exports["default"] = _default;