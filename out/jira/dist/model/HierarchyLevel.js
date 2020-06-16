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
 * The HierarchyLevel model module.
 * @module model/HierarchyLevel
 * @version 1.4.0
 */
var HierarchyLevel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HierarchyLevel</code>.
   * @alias module:model/HierarchyLevel
   */
  function HierarchyLevel() {
    _classCallCheck(this, HierarchyLevel);

    HierarchyLevel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HierarchyLevel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HierarchyLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HierarchyLevel} obj Optional instance to populate.
     * @return {module:model/HierarchyLevel} The populated <code>HierarchyLevel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HierarchyLevel();

        if (data.hasOwnProperty('aboveLevelId')) {
          obj['aboveLevelId'] = _ApiClient["default"].convertToType(data['aboveLevelId'], 'Number');
        }

        if (data.hasOwnProperty('belowLevelId')) {
          obj['belowLevelId'] = _ApiClient["default"].convertToType(data['belowLevelId'], 'Number');
        }

        if (data.hasOwnProperty('externalUuid')) {
          obj['externalUuid'] = _ApiClient["default"].convertToType(data['externalUuid'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issueTypeIds')) {
          obj['issueTypeIds'] = _ApiClient["default"].convertToType(data['issueTypeIds'], ['Number']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('projectConfigurationId')) {
          obj['projectConfigurationId'] = _ApiClient["default"].convertToType(data['projectConfigurationId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HierarchyLevel;
}();
/**
 * @member {Number} aboveLevelId
 */


HierarchyLevel.prototype['aboveLevelId'] = undefined;
/**
 * @member {Number} belowLevelId
 */

HierarchyLevel.prototype['belowLevelId'] = undefined;
/**
 * @member {String} externalUuid
 */

HierarchyLevel.prototype['externalUuid'] = undefined;
/**
 * @member {Number} id
 */

HierarchyLevel.prototype['id'] = undefined;
/**
 * @member {Array.<Number>} issueTypeIds
 */

HierarchyLevel.prototype['issueTypeIds'] = undefined;
/**
 * @member {String} name
 */

HierarchyLevel.prototype['name'] = undefined;
/**
 * @member {Number} projectConfigurationId
 */

HierarchyLevel.prototype['projectConfigurationId'] = undefined;
var _default = HierarchyLevel;
exports["default"] = _default;