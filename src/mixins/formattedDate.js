import moment from "moment";

export default {
	methods: {
		formattedDate(date) {
			return moment(date).format("MMMM D, YYYY");
		},
	},
};
