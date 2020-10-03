import Cookie from "js-cookie";

export const setListIds = idsInfo => {
	let ids = typeof idsInfo === 'string' ? idsInfo : idsInfo instanceof Array ? idsInfo.toString() : ""
	Cookie.set("list_ids",ids)
}

export const getListIds = () => {
	return Cookie.get("list_ids")
}

export const removeAll = () => {
	Cookie.remove("list_ids")
}
