"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CopyTagsFromSource = _interopRequireDefault(require("./CopyTagsFromSource"));

var _InstanceSpecification = _interopRequireDefault(require("./InstanceSpecification"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateSnapshotsRequest model module.
 * @module model/CreateSnapshotsRequest
 * @version 1.0.0
 */
var CreateSnapshotsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateSnapshotsRequest</code>.
   * @alias module:model/CreateSnapshotsRequest
   * @param instanceSpecification {module:model/InstanceSpecification} 
   */
  function CreateSnapshotsRequest(instanceSpecification) {
    _classCallCheck(this, CreateSnapshotsRequest);

    CreateSnapshotsRequest.initialize(this, instanceSpecification);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSnapshotsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceSpecification) {
      obj['InstanceSpecification'] = instanceSpecification;
    }
    /**
     * Constructs a <code>CreateSnapshotsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSnapshotsRequest} obj Optional instance to populate.
     * @return {module:model/CreateSnapshotsRequest} The populated <code>CreateSnapshotsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSnapshotsRequest();

        if (data.hasOwnProperty('CopyTagsFromSource')) {
          obj['CopyTagsFromSource'] = _CopyTagsFromSource["default"].constructFromObject(data['CopyTagsFromSource']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceSpecification')) {
          obj['InstanceSpecification'] = _InstanceSpecification["default"].constructFromObject(data['InstanceSpecification']);
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateSnapshotsRequest;
}();
/**
 * @member {module:model/CopyTagsFromSource} CopyTagsFromSource
 */


CreateSnapshotsRequest.prototype['CopyTagsFromSource'] = undefined;
/**
 * @member {String} Description
 */

CreateSnapshotsRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateSnapshotsRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/InstanceSpecification} InstanceSpecification
 */

CreateSnapshotsRequest.prototype['InstanceSpecification'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateSnapshotsRequest.prototype['TagSpecifications'] = undefined;
var _default = CreateSnapshotsRequest;
exports["default"] = _default;