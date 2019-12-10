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
 * The BasicProjectDetails model module.
 * @module model/BasicProjectDetails
 * @version 1.0.0
 */
var BasicProjectDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BasicProjectDetails</code>.
   * Get all projects for admin user
   * @alias module:model/BasicProjectDetails
   */
  function BasicProjectDetails() {
    _classCallCheck(this, BasicProjectDetails);

    BasicProjectDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicProjectDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BasicProjectDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicProjectDetails} obj Optional instance to populate.
     * @return {module:model/BasicProjectDetails} The populated <code>BasicProjectDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicProjectDetails();

        if (data.hasOwnProperty('http_url_to_repo')) {
          obj['http_url_to_repo'] = _ApiClient["default"].convertToType(data['http_url_to_repo'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('name_with_namespace')) {
          obj['name_with_namespace'] = _ApiClient["default"].convertToType(data['name_with_namespace'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('path_with_namespace')) {
          obj['path_with_namespace'] = _ApiClient["default"].convertToType(data['path_with_namespace'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BasicProjectDetails;
}();
/**
 * @member {String} http_url_to_repo
 */


BasicProjectDetails.prototype['http_url_to_repo'] = undefined;
/**
 * @member {String} id
 */

BasicProjectDetails.prototype['id'] = undefined;
/**
 * @member {String} name
 */

BasicProjectDetails.prototype['name'] = undefined;
/**
 * @member {String} name_with_namespace
 */

BasicProjectDetails.prototype['name_with_namespace'] = undefined;
/**
 * @member {String} path
 */

BasicProjectDetails.prototype['path'] = undefined;
/**
 * @member {String} path_with_namespace
 */

BasicProjectDetails.prototype['path_with_namespace'] = undefined;
/**
 * @member {String} web_url
 */

BasicProjectDetails.prototype['web_url'] = undefined;
var _default = BasicProjectDetails;
exports["default"] = _default;