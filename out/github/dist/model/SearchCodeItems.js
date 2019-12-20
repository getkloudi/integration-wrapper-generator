"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchCodeRepository = _interopRequireDefault(require("./SearchCodeRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchCodeItems model module.
 * @module model/SearchCodeItems
 * @version 1.3.2
 */
var SearchCodeItems =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchCodeItems</code>.
   * @alias module:model/SearchCodeItems
   */
  function SearchCodeItems() {
    _classCallCheck(this, SearchCodeItems);

    SearchCodeItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchCodeItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchCodeItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchCodeItems} obj Optional instance to populate.
     * @return {module:model/SearchCodeItems} The populated <code>SearchCodeItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchCodeItems();

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _SearchCodeRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SearchCodeItems;
}();
/**
 * @member {String} git_url
 */


SearchCodeItems.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

SearchCodeItems.prototype['html_url'] = undefined;
/**
 * @member {String} name
 */

SearchCodeItems.prototype['name'] = undefined;
/**
 * @member {String} path
 */

SearchCodeItems.prototype['path'] = undefined;
/**
 * @member {module:model/SearchCodeRepository} repository
 */

SearchCodeItems.prototype['repository'] = undefined;
/**
 * @member {Number} score
 */

SearchCodeItems.prototype['score'] = undefined;
/**
 * @member {String} sha
 */

SearchCodeItems.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

SearchCodeItems.prototype['url'] = undefined;
var _default = SearchCodeItems;
exports["default"] = _default;