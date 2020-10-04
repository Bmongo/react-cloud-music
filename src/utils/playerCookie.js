import Cookie from "js-cookie";

export const setListIds = idsInfo => {
	let ids = typeof idsInfo === 'string' ? idsInfo : idsInfo instanceof Array ? idsInfo.toString() : ""
	Cookie.set("list_ids",ids)
}

export const getListIds = () => {
	return Cookie.get("list_ids")
}

export const removeList = () => {
	Cookie.remove("list_ids")
}

export const setPlayWay = idx => {
	console.log(idx)
	Cookie.set("play_way",idx)
}

export const getPlayWay = () => {
	return Cookie.get("play_way")
}

export const removePlayWay = () => {
	Cookie.remove("play_way")
}
