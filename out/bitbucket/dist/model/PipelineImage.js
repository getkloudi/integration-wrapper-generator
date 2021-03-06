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
 * The PipelineImage model module.
 * @module model/PipelineImage
 * @version 1.2.0
 */
var PipelineImage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineImage</code>.
   * The definition of a Docker image that can be used for a Bitbucket Pipelines step execution context.
   * @alias module:model/PipelineImage
   */
  function PipelineImage() {
    _classCallCheck(this, PipelineImage);

    PipelineImage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineImage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineImage} obj Optional instance to populate.
     * @return {module:model/PipelineImage} The populated <code>PipelineImage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineImage();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineImage;
}();
/**
 * The name of the image. If the image is hosted on DockerHub the short name can be used, otherwise the fully qualified name is required here.
 * @member {String} name
 */


PipelineImage.prototype['name'] = undefined;
/**
 * The username needed to authenticate with the Docker registry. Only required when using a private Docker image.
 * @member {String} username
 */

PipelineImage.prototype['username'] = undefined;
/**
 * The password needed to authenticate with the Docker registry. Only required when using a private Docker image.
 * @member {String} password
 */

PipelineImage.prototype['password'] = undefined;
/**
 * The email needed to authenticate with the Docker registry. Only required when using a private Docker image.
 * @member {String} email
 */

PipelineImage.prototype['email'] = undefined;
var _default = PipelineImage;
exports["default"] = _default;