"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _BaseCommitAllOf = _interopRequireDefault(require("./BaseCommitAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseCommit model module.
 * @module model/BaseCommit
 * @version 1.0.0
 */
var BaseCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseCommit</code>.
   * @alias module:model/BaseCommit
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/BaseCommitAllOf
   * @param type {String} 
   */
  function BaseCommit(type) {
    _classCallCheck(this, BaseCommit);

    _ModelObject["default"].initialize(this, type);

    _BaseCommitAllOf["default"].initialize(this);

    BaseCommit.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseCommit, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>BaseCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseCommit} obj Optional instance to populate.
     * @return {module:model/BaseCommit} The populated <code>BaseCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseCommit();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _BaseCommitAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('author')) {
          obj['author'] = _Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [BaseCommit]);
        }
      }

      return obj;
    }
  }]);

  return BaseCommit;
}();
/**
 * @member {module:model/Author} author
 */


BaseCommit.prototype['author'] = undefined;
/**
 * @member {Date} date
 */

BaseCommit.prototype['date'] = undefined;
/**
 * @member {String} hash
 */

BaseCommit.prototype['hash'] = undefined;
/**
 * @member {String} message
 */

BaseCommit.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

BaseCommit.prototype['parents'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement BaseCommitAllOf interface:

/**
 * @member {module:model/Author} author
 */

_BaseCommitAllOf["default"].prototype['author'] = undefined;
/**
 * @member {Date} date
 */

_BaseCommitAllOf["default"].prototype['date'] = undefined;
/**
 * @member {String} hash
 */

_BaseCommitAllOf["default"].prototype['hash'] = undefined;
/**
 * @member {String} message
 */

_BaseCommitAllOf["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

_BaseCommitAllOf["default"].prototype['parents'] = undefined;
var _default = BaseCommit;
exports["default"] = _default;