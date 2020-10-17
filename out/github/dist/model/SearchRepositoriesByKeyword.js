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
 * The SearchRepositoriesByKeyword model module.
 * @module model/SearchRepositoriesByKeyword
 * @version 1.4.5
 */
var SearchRepositoriesByKeyword = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchRepositoriesByKeyword</code>.
   * @alias module:model/SearchRepositoriesByKeyword
   */
  function SearchRepositoriesByKeyword() {
    _classCallCheck(this, SearchRepositoriesByKeyword);

    SearchRepositoriesByKeyword.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchRepositoriesByKeyword, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchRepositoriesByKeyword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRepositoriesByKeyword} obj Optional instance to populate.
     * @return {module:model/SearchRepositoriesByKeyword} The populated <code>SearchRepositoriesByKeyword</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchRepositoriesByKeyword();

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _ApiClient["default"].convertToType(data['repositories'], [_Repo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchRepositoriesByKeyword;
}();
/**
 * @member {Array.<module:model/Repo>} repositories
 */


SearchRepositoriesByKeyword.prototype['repositories'] = undefined;
var _default = SearchRepositoriesByKeyword;
exports["default"] = _default;