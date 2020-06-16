"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HierarchyLevel = _interopRequireDefault(require("./HierarchyLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Hierarchy model module.
 * @module model/Hierarchy
 * @version 1.4.0
 */
var Hierarchy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Hierarchy</code>.
   * Project Issue Type Hierarchy
   * @alias module:model/Hierarchy
   */
  function Hierarchy() {
    _classCallCheck(this, Hierarchy);

    Hierarchy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Hierarchy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Hierarchy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hierarchy} obj Optional instance to populate.
     * @return {module:model/Hierarchy} The populated <code>Hierarchy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Hierarchy();

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], [_HierarchyLevel["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Hierarchy;
}();
/**
 * @member {Array.<module:model/HierarchyLevel>} level
 */


Hierarchy.prototype['level'] = undefined;
var _default = Hierarchy;
exports["default"] = _default;