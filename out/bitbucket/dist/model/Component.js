"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _ComponentAllOf = _interopRequireDefault(require("./ComponentAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Component model module.
 * @module model/Component
 * @version 1.1.2
 */
var Component =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Component</code>.
   * @alias module:model/Component
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/ComponentAllOf
   * @param type {String} 
   */
  function Component(type) {
    _classCallCheck(this, Component);

    _ModelObject["default"].initialize(this, type);

    _ComponentAllOf["default"].initialize(this);

    Component.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Component, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Component} obj Optional instance to populate.
     * @return {module:model/Component} The populated <code>Component</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Component();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _ComponentAllOf["default"].constructFromObject(data, obj);

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

  return Component;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


Component.prototype['links'] = undefined;
/**
 * @member {String} name
 */

Component.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

Component.prototype['id'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement ComponentAllOf interface:

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_ComponentAllOf["default"].prototype['links'] = undefined;
/**
 * @member {String} name
 */

_ComponentAllOf["default"].prototype['name'] = undefined;
/**
 * @member {Number} id
 */

_ComponentAllOf["default"].prototype['id'] = undefined;
var _default = Component;
exports["default"] = _default;