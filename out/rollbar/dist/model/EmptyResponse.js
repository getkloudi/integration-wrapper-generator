"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Err = _interopRequireDefault(require("./Err"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmptyResponse model module.
 * @module model/EmptyResponse
 * @version 1.1.0
 */
var EmptyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmptyResponse</code>.
   * @alias module:model/EmptyResponse
   */
  function EmptyResponse() {
    _classCallCheck(this, EmptyResponse);

    EmptyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmptyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmptyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmptyResponse} obj Optional instance to populate.
     * @return {module:model/EmptyResponse} The populated <code>EmptyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmptyResponse();

        if (data.hasOwnProperty('err')) {
          obj['err'] = _Err["default"].constructFromObject(data['err']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], Object);
        }
      }

      return obj;
    }
  }]);

  return EmptyResponse;
}();
/**
 * @member {module:model/Err} err
 */


EmptyResponse.prototype['err'] = undefined;
/**
 * @member {Object} result
 */

EmptyResponse.prototype['result'] = undefined;
var _default = EmptyResponse;
exports["default"] = _default;