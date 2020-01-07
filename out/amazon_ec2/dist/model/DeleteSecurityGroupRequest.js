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
 * The DeleteSecurityGroupRequest model module.
 * @module model/DeleteSecurityGroupRequest
 * @version 1.1.0
 */
var DeleteSecurityGroupRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteSecurityGroupRequest</code>.
   * @alias module:model/DeleteSecurityGroupRequest
   */
  function DeleteSecurityGroupRequest() {
    _classCallCheck(this, DeleteSecurityGroupRequest);

    DeleteSecurityGroupRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteSecurityGroupRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteSecurityGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSecurityGroupRequest} obj Optional instance to populate.
     * @return {module:model/DeleteSecurityGroupRequest} The populated <code>DeleteSecurityGroupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteSecurityGroupRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteSecurityGroupRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteSecurityGroupRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupId
 */

DeleteSecurityGroupRequest.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

DeleteSecurityGroupRequest.prototype['GroupName'] = undefined;
var _default = DeleteSecurityGroupRequest;
exports["default"] = _default;