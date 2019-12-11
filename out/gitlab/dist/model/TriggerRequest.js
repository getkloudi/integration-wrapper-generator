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
 * The TriggerRequest model module.
 * @module model/TriggerRequest
 * @version 1.1.0
 */
var TriggerRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TriggerRequest</code>.
   * Trigger a GitLab project build
   * @alias module:model/TriggerRequest
   */
  function TriggerRequest() {
    _classCallCheck(this, TriggerRequest);

    TriggerRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TriggerRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TriggerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerRequest} obj Optional instance to populate.
     * @return {module:model/TriggerRequest} The populated <code>TriggerRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TriggerRequest();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TriggerRequest;
}();
/**
 * @member {String} id
 */


TriggerRequest.prototype['id'] = undefined;
/**
 * @member {String} variables
 */

TriggerRequest.prototype['variables'] = undefined;
var _default = TriggerRequest;
exports["default"] = _default;