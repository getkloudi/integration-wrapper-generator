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
 * The CreateTagsRequest model module.
 * @module model/CreateTagsRequest
 * @version 1.1.0
 */
var CreateTagsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTagsRequest</code>.
   * @alias module:model/CreateTagsRequest
   * @param resources {Array.<String>} 
   * @param tags {Array.<module:model/Tag>} 
   */
  function CreateTagsRequest(resources, tags) {
    _classCallCheck(this, CreateTagsRequest);

    CreateTagsRequest.initialize(this, resources, tags);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTagsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, resources, tags) {
      obj['Resources'] = resources;
      obj['Tags'] = tags;
    }
    /**
     * Constructs a <code>CreateTagsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTagsRequest} obj Optional instance to populate.
     * @return {module:model/CreateTagsRequest} The populated <code>CreateTagsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTagsRequest();

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

  return CreateTagsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateTagsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} Resources
 */

CreateTagsRequest.prototype['Resources'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

CreateTagsRequest.prototype['Tags'] = undefined;
var _default = CreateTagsRequest;
exports["default"] = _default;