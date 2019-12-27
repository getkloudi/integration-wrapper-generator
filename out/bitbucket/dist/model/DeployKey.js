"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _DeployKeyAllOf = _interopRequireDefault(require("./DeployKeyAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeployKey model module.
 * @module model/DeployKey
 * @version 1.1.0
 */
var DeployKey =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeployKey</code>.
   * @alias module:model/DeployKey
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/DeployKeyAllOf
   * @param type {String} 
   */
  function DeployKey(type) {
    _classCallCheck(this, DeployKey);

    _ModelObject["default"].initialize(this, type);

    _DeployKeyAllOf["default"].initialize(this);

    DeployKey.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeployKey, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>DeployKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployKey} obj Optional instance to populate.
     * @return {module:model/DeployKey} The populated <code>DeployKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeployKey();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _DeployKeyAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('added_on')) {
          obj['added_on'] = _ApiClient["default"].convertToType(data['added_on'], 'Date');
        }

        if (data.hasOwnProperty('last_used')) {
          obj['last_used'] = _ApiClient["default"].convertToType(data['last_used'], 'Date');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }
      }

      return obj;
    }
  }]);

  return DeployKey;
}();
/**
 * The deploy key value.
 * @member {String} key
 */


DeployKey.prototype['key'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

DeployKey.prototype['repository'] = undefined;
/**
 * The comment parsed from the deploy key (if present)
 * @member {String} comment
 */

DeployKey.prototype['comment'] = undefined;
/**
 * The user-defined label for the deploy key
 * @member {String} label
 */

DeployKey.prototype['label'] = undefined;
/**
 * @member {Date} added_on
 */

DeployKey.prototype['added_on'] = undefined;
/**
 * @member {Date} last_used
 */

DeployKey.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

DeployKey.prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

DeployKey.prototype['owner'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement DeployKeyAllOf interface:

/**
 * The deploy key value.
 * @member {String} key
 */

_DeployKeyAllOf["default"].prototype['key'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

_DeployKeyAllOf["default"].prototype['repository'] = undefined;
/**
 * The comment parsed from the deploy key (if present)
 * @member {String} comment
 */

_DeployKeyAllOf["default"].prototype['comment'] = undefined;
/**
 * The user-defined label for the deploy key
 * @member {String} label
 */

_DeployKeyAllOf["default"].prototype['label'] = undefined;
/**
 * @member {Date} added_on
 */

_DeployKeyAllOf["default"].prototype['added_on'] = undefined;
/**
 * @member {Date} last_used
 */

_DeployKeyAllOf["default"].prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_DeployKeyAllOf["default"].prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

_DeployKeyAllOf["default"].prototype['owner'] = undefined;
var _default = DeployKey;
exports["default"] = _default;