"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchrestrictionAllOfLinks = _interopRequireDefault(require("./BranchrestrictionAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _VersionAllOf = _interopRequireDefault(require("./VersionAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Version model module.
 * @module model/Version
 * @version 1.1.0
 */
var Version =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/VersionAllOf
   * @param type {String} 
   */
  function Version(type) {
    _classCallCheck(this, Version);

    _ModelObject["default"].initialize(this, type);

    _VersionAllOf["default"].initialize(this);

    Version.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Version, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Version();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _VersionAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchrestrictionAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Version;
}();
/**
 * @member {Number} id
 */


Version.prototype['id'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */

Version.prototype['links'] = undefined;
/**
 * @member {String} name
 */

Version.prototype['name'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement VersionAllOf interface:

/**
 * @member {Number} id
 */

_VersionAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */

_VersionAllOf["default"].prototype['links'] = undefined;
/**
 * @member {String} name
 */

_VersionAllOf["default"].prototype['name'] = undefined;
var _default = Version;
exports["default"] = _default;