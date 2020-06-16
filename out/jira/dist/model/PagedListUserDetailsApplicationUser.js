"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagedListUserDetailsApplicationUser model module.
 * @module model/PagedListUserDetailsApplicationUser
 * @version 1.4.0
 */
var PagedListUserDetailsApplicationUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagedListUserDetailsApplicationUser</code>.
   * A paged list. To access additional details append &#x60;[start-index:end-index]&#x60; to the expand request. For example, &#x60;?expand&#x3D;sharedUsers[10:40]&#x60; returns a list starting at item 10 and finishing at item 40.
   * @alias module:model/PagedListUserDetailsApplicationUser
   */
  function PagedListUserDetailsApplicationUser() {
    _classCallCheck(this, PagedListUserDetailsApplicationUser);

    PagedListUserDetailsApplicationUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagedListUserDetailsApplicationUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagedListUserDetailsApplicationUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedListUserDetailsApplicationUser} obj Optional instance to populate.
     * @return {module:model/PagedListUserDetailsApplicationUser} The populated <code>PagedListUserDetailsApplicationUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagedListUserDetailsApplicationUser();

        if (data.hasOwnProperty('end-index')) {
          obj['end-index'] = _ApiClient["default"].convertToType(data['end-index'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_UserDetails["default"]]);
        }

        if (data.hasOwnProperty('max-results')) {
          obj['max-results'] = _ApiClient["default"].convertToType(data['max-results'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('start-index')) {
          obj['start-index'] = _ApiClient["default"].convertToType(data['start-index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PagedListUserDetailsApplicationUser;
}();
/**
 * The index of the last item returned on the page.
 * @member {Number} end-index
 */


PagedListUserDetailsApplicationUser.prototype['end-index'] = undefined;
/**
 * The list of items.
 * @member {Array.<module:model/UserDetails>} items
 */

PagedListUserDetailsApplicationUser.prototype['items'] = undefined;
/**
 * The maximum number of results that could be on the page.
 * @member {Number} max-results
 */

PagedListUserDetailsApplicationUser.prototype['max-results'] = undefined;
/**
 * The number of items on the page.
 * @member {Number} size
 */

PagedListUserDetailsApplicationUser.prototype['size'] = undefined;
/**
 * The index of the first item returned on the page.
 * @member {Number} start-index
 */

PagedListUserDetailsApplicationUser.prototype['start-index'] = undefined;
var _default = PagedListUserDetailsApplicationUser;
exports["default"] = _default;