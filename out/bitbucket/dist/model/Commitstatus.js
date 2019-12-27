"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitstatusAllOf = _interopRequireDefault(require("./CommitstatusAllOf"));

var _CommitstatusAllOfLinks = _interopRequireDefault(require("./CommitstatusAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Commitstatus model module.
 * @module model/Commitstatus
 * @version 1.1.0
 */
var Commitstatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Commitstatus</code>.
   * @alias module:model/Commitstatus
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/CommitstatusAllOf
   * @param type {String} 
   */
  function Commitstatus(type) {
    _classCallCheck(this, Commitstatus);

    _ModelObject["default"].initialize(this, type);

    _CommitstatusAllOf["default"].initialize(this);

    Commitstatus.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commitstatus, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Commitstatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commitstatus} obj Optional instance to populate.
     * @return {module:model/Commitstatus} The populated <code>Commitstatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commitstatus();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _CommitstatusAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _CommitstatusAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('refname')) {
          obj['refname'] = _ApiClient["default"].convertToType(data['refname'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Commitstatus;
}();
/**
 * @member {module:model/CommitstatusAllOfLinks} links
 */


Commitstatus.prototype['links'] = undefined;
/**
 * The commit status' id.
 * @member {String} uuid
 */

Commitstatus.prototype['uuid'] = undefined;
/**
 * An identifier for the status that's unique to         its type (current \"build\" is the only supported type) and the vendor,         e.g. BB-DEPLOY
 * @member {String} key
 */

Commitstatus.prototype['key'] = undefined;
/**
 *  The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even apply (e.g. a static linting job).
 * @member {String} refname
 */

Commitstatus.prototype['refname'] = undefined;
/**
 * A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
 * @member {String} url
 */

Commitstatus.prototype['url'] = undefined;
/**
 * Provides some indication of the status of this commit
 * @member {module:model/Commitstatus.StateEnum} state
 */

Commitstatus.prototype['state'] = undefined;
/**
 * An identifier for the build itself, e.g. BB-DEPLOY-1
 * @member {String} name
 */

Commitstatus.prototype['name'] = undefined;
/**
 * A description of the build (e.g. \"Unit tests in Bamboo\")
 * @member {String} description
 */

Commitstatus.prototype['description'] = undefined;
/**
 * @member {Date} created_on
 */

Commitstatus.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

Commitstatus.prototype['updated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement CommitstatusAllOf interface:

/**
 * @member {module:model/CommitstatusAllOfLinks} links
 */

_CommitstatusAllOf["default"].prototype['links'] = undefined;
/**
 * The commit status' id.
 * @member {String} uuid
 */

_CommitstatusAllOf["default"].prototype['uuid'] = undefined;
/**
 * An identifier for the status that's unique to         its type (current \"build\" is the only supported type) and the vendor,         e.g. BB-DEPLOY
 * @member {String} key
 */

_CommitstatusAllOf["default"].prototype['key'] = undefined;
/**
 *  The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even apply (e.g. a static linting job).
 * @member {String} refname
 */

_CommitstatusAllOf["default"].prototype['refname'] = undefined;
/**
 * A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
 * @member {String} url
 */

_CommitstatusAllOf["default"].prototype['url'] = undefined;
/**
 * Provides some indication of the status of this commit
 * @member {module:model/CommitstatusAllOf.StateEnum} state
 */

_CommitstatusAllOf["default"].prototype['state'] = undefined;
/**
 * An identifier for the build itself, e.g. BB-DEPLOY-1
 * @member {String} name
 */

_CommitstatusAllOf["default"].prototype['name'] = undefined;
/**
 * A description of the build (e.g. \"Unit tests in Bamboo\")
 * @member {String} description
 */

_CommitstatusAllOf["default"].prototype['description'] = undefined;
/**
 * @member {Date} created_on
 */

_CommitstatusAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_CommitstatusAllOf["default"].prototype['updated_on'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Commitstatus['StateEnum'] = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  "SUCCESSFUL": "SUCCESSFUL",

  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",

  /**
   * value: "INPROGRESS"
   * @const
   */
  "INPROGRESS": "INPROGRESS",

  /**
   * value: "STOPPED"
   * @const
   */
  "STOPPED": "STOPPED"
};
var _default = Commitstatus;
exports["default"] = _default;