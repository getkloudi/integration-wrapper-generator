"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repo = _interopRequireDefault(require("./Repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchRepositories model module.
 * @module model/SearchRepositories
 * @version 1.4.5
 */
var SearchRepositories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRepositories</code>.
   * @alias module:model/SearchRepositories
   */
  function SearchRepositories() {
    _classCallCheck(this, SearchRepositories);

    SearchRepositories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchRepositories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchRepositories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRepositories} obj Optional instance to populate.
     * @return {module:model/SearchRepositories} The populated <code>SearchRepositories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRepositories();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_Repo["default"]]);
        }

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SearchRepositories;
}();
/**
 * @member {Array.<module:model/Repo>} items
 */


SearchRepositories.prototype['items'] = undefined;
/**
 * @member {Number} total_count
 */

SearchRepositories.prototype['total_count'] = undefined;
var _default = SearchRepositories;
exports["default"] = _default;