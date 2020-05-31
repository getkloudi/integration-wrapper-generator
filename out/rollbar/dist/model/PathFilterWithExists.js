"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation34"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PathFilterWithExists model module.
 * @module model/PathFilterWithExists
 * @version 1.1.0
 */
var PathFilterWithExists = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PathFilterWithExists</code>.
   * @alias module:model/PathFilterWithExists
   * @param path {String} 
   * @param type {String} Allows for filtering based on any data in the JSON payload. To view the JSON structure of your errors, check out the Raw JSON section of any occurrence
   * @param operation {module:model/Operation34} 
   */
  function PathFilterWithExists(path, type, operation) {
    _classCallCheck(this, PathFilterWithExists);

    PathFilterWithExists.initialize(this, path, type, operation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PathFilterWithExists, null, [{
    key: "initialize",
    value: function initialize(obj, path, type, operation) {
      obj['path'] = path;
      obj['type'] = type;
      obj['operation'] = operation;
    }
    /**
     * Constructs a <code>PathFilterWithExists</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathFilterWithExists} obj Optional instance to populate.
     * @return {module:model/PathFilterWithExists} The populated <code>PathFilterWithExists</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PathFilterWithExists();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _Operation["default"].constructFromObject(data['operation']);
        }
      }

      return obj;
    }
  }]);

  return PathFilterWithExists;
}();
/**
 * @member {String} path
 */


PathFilterWithExists.prototype['path'] = undefined;
/**
 * Allows for filtering based on any data in the JSON payload. To view the JSON structure of your errors, check out the Raw JSON section of any occurrence
 * @member {String} type
 * @default 'path'
 */

PathFilterWithExists.prototype['type'] = 'path';
/**
 * @member {String} value
 */

PathFilterWithExists.prototype['value'] = undefined;
/**
 * @member {module:model/Operation34} operation
 */

PathFilterWithExists.prototype['operation'] = undefined;
var _default = PathFilterWithExists;
exports["default"] = _default;