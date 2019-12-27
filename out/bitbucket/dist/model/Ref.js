"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _RefLinks = _interopRequireDefault(require("./RefLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Ref model module.
 * @module model/Ref
 * @version 1.1.2
 */
var Ref =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Ref</code>.
   * A ref object, representing a branch or tag in a repository.
   * @alias module:model/Ref
   * @param type {String} 
   */
  function Ref(type) {
    _classCallCheck(this, Ref);

    Ref.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ref, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Ref</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ref} obj Optional instance to populate.
     * @return {module:model/Ref} The populated <code>Ref</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ref();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _RefLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _Commit["default"].constructFromObject(data['target']);
        }
      }

      return obj;
    }
  }]);

  return Ref;
}();
/**
 * @member {String} type
 */


Ref.prototype['type'] = undefined;
/**
 * @member {module:model/RefLinks} links
 */

Ref.prototype['links'] = undefined;
/**
 * The name of the ref.
 * @member {String} name
 */

Ref.prototype['name'] = undefined;
/**
 * @member {module:model/Commit} target
 */

Ref.prototype['target'] = undefined;
var _default = Ref;
exports["default"] = _default;