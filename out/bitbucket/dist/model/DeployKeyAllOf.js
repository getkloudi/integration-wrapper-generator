"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeployKeyAllOf model module.
 * @module model/DeployKeyAllOf
 * @version 1.2.0
 */
var DeployKeyAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeployKeyAllOf</code>.
   * Represents deploy key for a repository.
   * @alias module:model/DeployKeyAllOf
   */
  function DeployKeyAllOf() {
    _classCallCheck(this, DeployKeyAllOf);

    DeployKeyAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeployKeyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeployKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployKeyAllOf} obj Optional instance to populate.
     * @return {module:model/DeployKeyAllOf} The populated <code>DeployKeyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeployKeyAllOf();

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

  return DeployKeyAllOf;
}();
/**
 * The deploy key value.
 * @member {String} key
 */


DeployKeyAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

DeployKeyAllOf.prototype['repository'] = undefined;
/**
 * The comment parsed from the deploy key (if present)
 * @member {String} comment
 */

DeployKeyAllOf.prototype['comment'] = undefined;
/**
 * The user-defined label for the deploy key
 * @member {String} label
 */

DeployKeyAllOf.prototype['label'] = undefined;
/**
 * @member {Date} added_on
 */

DeployKeyAllOf.prototype['added_on'] = undefined;
/**
 * @member {Date} last_used
 */

DeployKeyAllOf.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

DeployKeyAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

DeployKeyAllOf.prototype['owner'] = undefined;
var _default = DeployKeyAllOf;
exports["default"] = _default;