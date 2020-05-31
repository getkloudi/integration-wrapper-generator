"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Err = _interopRequireDefault(require("./Err"));

var _ItemInVersion = _interopRequireDefault(require("./ItemInVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Api1VersionsItemsResponse model module.
 * @module model/Api1VersionsItemsResponse
 * @version 1.1.0
 */
var Api1VersionsItemsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1VersionsItemsResponse</code>.
   * @alias module:model/Api1VersionsItemsResponse
   */
  function Api1VersionsItemsResponse() {
    _classCallCheck(this, Api1VersionsItemsResponse);

    Api1VersionsItemsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1VersionsItemsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Api1VersionsItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1VersionsItemsResponse} obj Optional instance to populate.
     * @return {module:model/Api1VersionsItemsResponse} The populated <code>Api1VersionsItemsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1VersionsItemsResponse();

        if (data.hasOwnProperty('err')) {
          obj['err'] = _Err["default"].constructFromObject(data['err']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_ItemInVersion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Api1VersionsItemsResponse;
}();
/**
 * @member {module:model/Err} err
 */


Api1VersionsItemsResponse.prototype['err'] = undefined;
/**
 * @member {Array.<module:model/ItemInVersion>} result
 */

Api1VersionsItemsResponse.prototype['result'] = undefined;
var _default = Api1VersionsItemsResponse;
exports["default"] = _default;