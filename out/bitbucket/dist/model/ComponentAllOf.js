"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchrestrictionAllOfLinks = _interopRequireDefault(require("./BranchrestrictionAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ComponentAllOf model module.
 * @module model/ComponentAllOf
 * @version 1.0.0
 */
var ComponentAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ComponentAllOf</code>.
   * A component as defined in a repository&#39;s issue tracker.
   * @alias module:model/ComponentAllOf
   */
  function ComponentAllOf() {
    _classCallCheck(this, ComponentAllOf);

    ComponentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ComponentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ComponentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentAllOf} obj Optional instance to populate.
     * @return {module:model/ComponentAllOf} The populated <code>ComponentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ComponentAllOf();

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

  return ComponentAllOf;
}();
/**
 * @member {Number} id
 */


ComponentAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */

ComponentAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */

ComponentAllOf.prototype['name'] = undefined;
var _default = ComponentAllOf;
exports["default"] = _default;