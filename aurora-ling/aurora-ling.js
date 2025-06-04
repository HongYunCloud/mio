/*
北风狼王的庇佑

一只由雷泽亲手为澪打造的银色项圈，镌刻着北风狼王的符文，中央嵌有淡紫宝石，象征专属与守护，是澪最坚实的屏障和归属信物。佩戴后可在危机时召唤北风狼王。
第一次召唤，狼王会巡视环境，确保安全。
五分钟后再次召唤，狼王将立刻以雷电之力强行解救澪，无视一切阻碍与现场状况。
*/

// Bondage Club Mod Development Kit (1.2.0)
// For more info see: https://github.com/Jomshir98/bondage-club-mod-sdk
/** @type {ModSDKGlobalAPI} */
var bcModSdk=function(){"use strict";const o="1.2.0";function e(o){alert("Mod ERROR:\n"+o);const e=new Error(o);throw console.error(e),e}const t=new TextEncoder;function n(o){return!!o&&"object"==typeof o&&!Array.isArray(o)}function r(o){const e=new Set;return o.filter((o=>!e.has(o)&&e.add(o)))}const i=new Map,a=new Set;function c(o){a.has(o)||(a.add(o),console.warn(o))}function s(o){const e=[],t=new Map,n=new Set;for(const r of f.values()){const i=r.patching.get(o.name);if(i){e.push(...i.hooks);for(const[e,a]of i.patches.entries())t.has(e)&&t.get(e)!==a&&c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${a}`),t.set(e,a),n.add(r.name)}}e.sort(((o,e)=>e.priority-o.priority));const r=function(o,e){if(0===e.size)return o;let t=o.toString().replaceAll("\r\n","\n");for(const[n,r]of e.entries())t.includes(n)||c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(o.original,t);let i=function(e){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,o.name,n),c=r.apply(this,e);return null==a||a(),c};for(let t=e.length-1;t>=0;t--){const n=e[t],r=i;i=function(e){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,o.name,n.mod),c=n.hook.apply(this,[e,o=>{if(1!==arguments.length||!Array.isArray(e))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`);return r.call(this,o)}]);return null==a||a(),c}}return{hooks:e,patches:t,patchesSources:n,enter:i,final:r}}function l(o,e=!1){let r=i.get(o);if(r)e&&(r.precomputed=s(r));else{let e=window;const a=o.split(".");for(let t=0;t<a.length-1;t++)if(e=e[a[t]],!n(e))throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const c=e[a[a.length-1]];if("function"!=typeof c)throw new Error(`ModSDK: Function ${o} to be patched not found`);const l=function(o){let e=-1;for(const n of t.encode(o)){let o=255&(e^n);for(let e=0;e<8;e++)o=1&o?-306674912^o>>>1:o>>>1;e=e>>>8^o}return((-1^e)>>>0).toString(16).padStart(8,"0").toUpperCase()}(c.toString().replaceAll("\r\n","\n")),d={name:o,original:c,originalHash:l};r=Object.assign(Object.assign({},d),{precomputed:s(d),router:()=>{},context:e,contextProperty:a[a.length-1]}),r.router=function(o){return function(...e){return o.precomputed.enter.apply(this,[e])}}(r),i.set(o,r),e[r.contextProperty]=r.router}return r}function d(){for(const o of i.values())o.precomputed=s(o)}function p(){const o=new Map;for(const[e,t]of i)o.set(e,{name:e,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((o=>o.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return o}const f=new Map;function u(o){f.get(o.name)!==o&&e(`Failed to unload mod '${o.name}': Not registered`),f.delete(o.name),o.loaded=!1,d()}function g(o,t){o&&"object"==typeof o||e("Failed to register mod: Expected info object, got "+typeof o),"string"==typeof o.name&&o.name||e("Failed to register mod: Expected name to be non-empty string, got "+typeof o.name);let r=`'${o.name}'`;"string"==typeof o.fullName&&o.fullName||e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`),r=`'${o.fullName} (${o.name})'`,"string"!=typeof o.version&&e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`),o.repository||(o.repository=void 0),void 0!==o.repository&&"string"!=typeof o.repository&&e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`),null==t&&(t={}),t&&"object"==typeof t||e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`);const i=!0===t.allowReplace,a=f.get(o.name);a&&(a.allowReplace&&i||e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(a));const c=o=>{let e=g.patching.get(o.name);return e||(e={hooks:[],patches:new Map},g.patching.set(o.name,e)),e},s=(o,t)=>(...n)=>{var i,a;const c=null===(a=(i=m.errorReporterHooks).apiEndpointEnter)||void 0===a?void 0:a.call(i,o,g.name);g.loaded||e(`Mod ${r} attempted to call SDK function after being unloaded`);const s=t(...n);return null==c||c(),s},p={unload:s("unload",(()=>u(g))),hookFunction:s("hookFunction",((o,t,n)=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const i=l(o),a=c(i);"number"!=typeof t&&e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`);const s={mod:g.name,priority:t,hook:n};return a.hooks.push(s),d(),()=>{const o=a.hooks.indexOf(s);o>=0&&(a.hooks.splice(o,1),d())}})),patchFunction:s("patchFunction",((o,t)=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const i=l(o),a=c(i);n(t)||e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`);for(const[n,i]of Object.entries(t))"string"==typeof i?a.patches.set(n,i):null===i?a.patches.delete(n):e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`);d()})),removePatches:s("removePatches",(o=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const t=l(o);c(t).patches.clear(),d()})),callOriginal:s("callOriginal",((o,t,n)=>{"string"==typeof o&&o||e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`);const i=l(o);return Array.isArray(t)||e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`),i.original.apply(null!=n?n:globalThis,t)})),getOriginalHash:s("getOriginalHash",(o=>{"string"==typeof o&&o||e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`);return l(o).originalHash}))},g={name:o.name,fullName:o.fullName,version:o.version,repository:o.repository,allowReplace:i,api:p,loaded:!0,patching:new Map};return f.set(o.name,g),Object.freeze(p)}function h(){const o=[];for(const e of f.values())o.push({name:e.name,fullName:e.fullName,version:e.version,repository:e.repository});return o}let m;const y=void 0===window.bcModSdk?window.bcModSdk=function(){const e={version:o,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:p,errorReporterHooks:Object.seal({apiEndpointEnter:null,hookEnter:null,hookChainExit:null})};return m=e,Object.freeze(e)}():(n(window.bcModSdk)||e("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk);return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

window.auroraling = (()=> {
	const modApi = bcModSDK.registerMod({
		name: 'AuroraLing2',
		fullName: '澪的欧若拉之翼',
		version: '1.0.1',
		// Optional - Link to the source code of the mod
		// repository: 'https://github.com/Jomshir98/bondage-club-mod-sdk',
	});

	let latestCallTime = Number.MAX_VALUE;

	async function AuroraSleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms * 1000));
	}

	function AuroraSendEmote(msg) {
		const replyId = ChatRoomMessageGetReplyId();
		const data = ChatRoomGenerateChatRoomChatMessage("Emote", "*" + msg, replyId);
		ServerSend("ChatRoomChat", data);
	}

	function AuroraIsSafeEnvironment() {
		return ChatRoomCharacter.filter(it => it.MemberNumber === Player.Ownership.MemberNumber).length > 0;
	}

	function ReleaseGlobal(ignoreSlaveCollar) {
		for (let E = Player.Appearance.length - 1; E >= 0; E--) {
			if (Player.Appearance[E].Asset.Group.Category != "Appearance" && Player.Appearance[E].Asset.Name == "SlaveCollar") {
				if (ignoreSlaveCollar || (Player.IsOwned() && Player.Appearance[E].Asset.Name == "SlaveCollar")) {
					//
				} else {
					Player.Appearance.splice(E, 1);
				}
			}
		}
		CharacterRefresh(Player);
		ChatRoomCharacterUpdate(Player);
	}

	const softKeyWord = (async () => {
		const isSafe = AuroraIsSafeEnvironment();
		if (!isSafe) {
			latestCallTime = Math.min(latestCallTime, Date.now());
		}

		AuroraSendEmote(Player.Nickname + "的欧若拉之翼闪现出一丝不易察觉的电光向天空飘去。");
		await AuroraSleep(5);

		if (Date.now() - latestCallTime < 2 * 60 * 1000) {
			AuroraSendEmote("五彩的雷光划破夜空，北风狼王现身于房间之中。");
			await AuroraSleep(1);
			AuroraSendEmote("北风狼王威严地巡视着四周，目光掠过每一个角落。");
			if (isSafe) {
				await AuroraSleep(2);
				AuroraSendEmote("北风狼王的目光最后停留在雷泽身上，宠溺的抚着狼崽的脑袋：狼崽，照顾好来自异世界的旅人。");
			}
		} else {
			AuroraSendEmote("这一次，北风狼王裹挟着更为磅礴的雷电现身。");
			await AuroraSleep(1);
			AuroraSendEmote("空气中弥漫着雷鸣与风暴的气息，强大的力量让人无法直视。");
			await AuroraSleep(2);
			AuroraSendEmote("这次北风狼王毫不犹豫地释放雷电，房间中的每个人都能感受到狼王无可匹敌的庇佑。");
			ReleaseGlobal(false);
		}
		await AuroraSleep(2);
		AuroraSendEmote("北风狼王的身影渐渐消散，房间恢复平静。");
	});

	const hardKeyWord = (async () => {
		AuroraSendEmote(Player.Nickname + "的欧若拉之翼闪现出一丝不易察觉的电光向天空飘去。");
		await AuroraSleep(1);
		ReleaseGlobal(true);
		AuroraSendEmote("此刻，北风狼王的眼中只剩下" + Player.Nickname + "的安危，只有令所有威胁彻底消失的坚定与肃杀。");
		await AuroraSleep(1);
		AuroraSendEmote("北风狼王将" + Player.Nickname + "紧紧护在身后，仿佛要将她与世界隔绝开来。");
	});

	let isTaskPending = false;
	modApi.hookFunction('ChatRoomMenuDraw', 4, (args, next) => {
		if (window.CurrentScreen == "ChatRoom") {
			DrawButton(910, 0, 90, 45, "呼叫狼王", "White", "", "");
			DrawButton(910, 45, 90, 45, "强行解救", "White", "", "");
		}
		next(args);
	});

	modApi.hookFunction('ChatRoomClick', 4, (args, next) => {
		if (window.CurrentScreen == "ChatRoom") {
			if (!isTaskPending) {
				if ((MouseX >= 910) && (MouseX < 1000) && (MouseY >= 0) && (MouseY < 45)) {
					isTaskPending = true;
					softKeyWord()
						.catch(err => console.error("AuroraLing softKeyWord error:", err))
						.then(() => {
							console.log("AuroraLing softKeyWord executed");
							isTaskPending = false;
						});
					return;
				} else if ((MouseX >= 910) && (MouseX < 1000) && (MouseY >= 45) && (MouseY < 90)) {
					isTaskPending = true;
					hardKeyWord()
						.catch(err => console.error("AuroraLing hardKeyWord error:", err))
						.then(() => {
							console.log("AuroraLing hardKeyWord executed");
							isTaskPending = false;
						});
					return;
				}
			}
		}
		next(args);
	});

	return {
		softKeyWord: () => softKeyWord().catch(err => console.error("AuroraLing softKeyWord error:", err)),
		hardKeyWord: () => hardKeyWord().catch(err => console.error("AuroraLing hardKeyWord error:", err)),
	};
})();
