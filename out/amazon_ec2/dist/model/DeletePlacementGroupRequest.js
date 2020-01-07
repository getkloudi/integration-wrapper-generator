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
 * The DeletePlacementGroupRequest model module.
 * @module model/DeletePlacementGroupRequest
 * @version 1.1.0
 */
var DeletePlacementGroupRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeletePlacementGroupRequest</code>.
   * @alias module:model/DeletePlacementGroupRequest
   * @param groupName {String} 
   */
  function DeletePlacementGroupRequest(groupName) {
    _classCallCheck(this, DeletePlacementGroupRequest);

    DeletePlacementGroupRequest.initialize(this, groupName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeletePlacementGroupRequest, null, [{
    key: "initialize",
    value: function initialize(obj, groupName) {
      obj['GroupName'] = groupName;
    }
    /**
     * Constructs a <code>DeletePlacementGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletePlacementGroupRequest} obj Optional instance to populate.
     * @return {module:model/DeletePlacementGroupRequest} The populated <code>DeletePlacementGroupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeletePlacementGroupRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeletePlacementGroupRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeletePlacementGroupRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupName
 */

DeletePlacementGroupRequest.prototype['GroupName'] = undefined;
var _default = DeletePlacementGroupRequest;
exports["default"] = _default;