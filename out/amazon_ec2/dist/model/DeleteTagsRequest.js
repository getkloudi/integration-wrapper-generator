"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteTagsRequest model module.
 * @module model/DeleteTagsRequest
 * @version 1.1.0
 */
var DeleteTagsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTagsRequest</code>.
   * @alias module:model/DeleteTagsRequest
   * @param resources {Array.<String>} 
   */
  function DeleteTagsRequest(resources) {
    _classCallCheck(this, DeleteTagsRequest);

    DeleteTagsRequest.initialize(this, resources);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTagsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, resources) {
      obj['Resources'] = resources;
    }
    /**
     * Constructs a <code>DeleteTagsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTagsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTagsRequest} The populated <code>DeleteTagsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTagsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _ApiClient["default"].convertToType(data['Resources'], ['String']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeleteTagsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteTagsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} Resources
 */

DeleteTagsRequest.prototype['Resources'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

DeleteTagsRequest.prototype['Tags'] = undefined;
var _default = DeleteTagsRequest;
exports["default"] = _default;