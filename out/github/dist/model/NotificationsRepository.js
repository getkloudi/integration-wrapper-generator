"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Actor = _interopRequireDefault(require("./Actor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NotificationsRepository model module.
 * @module model/NotificationsRepository
 * @version 1.4.6
 */
var NotificationsRepository = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationsRepository</code>.
   * @alias module:model/NotificationsRepository
   */
  function NotificationsRepository() {
    _classCallCheck(this, NotificationsRepository);

    NotificationsRepository.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationsRepository, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationsRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsRepository} obj Optional instance to populate.
     * @return {module:model/NotificationsRepository} The populated <code>NotificationsRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationsRepository();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fork')) {
          obj['fork'] = _ApiClient["default"].convertToType(data['fork'], 'Boolean');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Actor["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NotificationsRepository;
}();
/**
 * @member {String} description
 */


NotificationsRepository.prototype['description'] = undefined;
/**
 * @member {Boolean} fork
 */

NotificationsRepository.prototype['fork'] = undefined;
/**
 * @member {String} full_name
 */

NotificationsRepository.prototype['full_name'] = undefined;
/**
 * @member {String} html_url
 */

NotificationsRepository.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

NotificationsRepository.prototype['id'] = undefined;
/**
 * @member {String} name
 */

NotificationsRepository.prototype['name'] = undefined;
/**
 * @member {module:model/Actor} owner
 */

NotificationsRepository.prototype['owner'] = undefined;
/**
 * @member {Boolean} private
 */

NotificationsRepository.prototype['private'] = undefined;
/**
 * @member {String} url
 */

NotificationsRepository.prototype['url'] = undefined;
var _default = NotificationsRepository;
exports["default"] = _default;