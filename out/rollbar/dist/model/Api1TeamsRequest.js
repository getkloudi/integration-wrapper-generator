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
 * The Api1TeamsRequest model module.
 * @module model/Api1TeamsRequest
 * @version 1.1.0
 */
var Api1TeamsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1TeamsRequest</code>.
   * @alias module:model/Api1TeamsRequest
   * @param name {String} Name of the team. Max length 32 characters.
   * @param accessLevel {String} Can be `standard`, `light`, or `view`.
   */
  function Api1TeamsRequest(name, accessLevel) {
    _classCallCheck(this, Api1TeamsRequest);

    Api1TeamsRequest.initialize(this, name, accessLevel);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1TeamsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name, accessLevel) {
      obj['name'] = name;
      obj['access_level'] = accessLevel;
    }
    /**
     * Constructs a <code>Api1TeamsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1TeamsRequest} obj Optional instance to populate.
     * @return {module:model/Api1TeamsRequest} The populated <code>Api1TeamsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1TeamsRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('access_level')) {
          obj['access_level'] = _ApiClient["default"].convertToType(data['access_level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Api1TeamsRequest;
}();
/**
 * Name of the team. Max length 32 characters.
 * @member {String} name
 */


Api1TeamsRequest.prototype['name'] = undefined;
/**
 * Can be `standard`, `light`, or `view`.
 * @member {String} access_level
 */

Api1TeamsRequest.prototype['access_level'] = undefined;
var _default = Api1TeamsRequest;
exports["default"] = _default;