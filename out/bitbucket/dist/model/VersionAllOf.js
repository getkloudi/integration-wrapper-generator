"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VersionAllOf model module.
 * @module model/VersionAllOf
 * @version 1.2.0
 */
var VersionAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionAllOf</code>.
   * A version as defined in a repository&#39;s issue tracker.
   * @alias module:model/VersionAllOf
   */
  function VersionAllOf() {
    _classCallCheck(this, VersionAllOf);

    VersionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionAllOf} obj Optional instance to populate.
     * @return {module:model/VersionAllOf} The populated <code>VersionAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return VersionAllOf;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


VersionAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */

VersionAllOf.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

VersionAllOf.prototype['id'] = undefined;
var _default = VersionAllOf;
exports["default"] = _default;