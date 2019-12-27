"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Treeentry model module.
 * @module model/Treeentry
 * @version 1.1.2
 */
var Treeentry =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Treeentry</code>.
   * Base type for most resource objects. It defines the common &#x60;type&#x60; element that identifies an object&#39;s type. It also identifies the element as Swagger&#39;s &#x60;discriminator&#x60;.
   * @alias module:model/Treeentry
   * @param type {String} 
   */
  function Treeentry(type) {
    _classCallCheck(this, Treeentry);

    Treeentry.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Treeentry, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Treeentry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Treeentry} obj Optional instance to populate.
     * @return {module:model/Treeentry} The populated <code>Treeentry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Treeentry();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }
      }

      return obj;
    }
  }]);

  return Treeentry;
}();
/**
 * @member {String} type
 */


Treeentry.prototype['type'] = undefined;
/**
 * The path in the repository
 * @member {String} path
 */

Treeentry.prototype['path'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

Treeentry.prototype['commit'] = undefined;
var _default = Treeentry;
exports["default"] = _default;