// @/lib/activity/reads.ts
export interface Read {
	id: string;
	title: string;
	author: string;
	cover: string;
	url?: string;
}

export const recentReads: Read[] = [
	{
		id: "1",
		title: "Piranesi",
		author: "Susanna Clarke",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1773750050i/50202953.jpg",
		url: "https://www.goodreads.com/book/show/50202953-piranesi"
	},
	{
		id: "2",
		title: "The Count of Monte Cristo",
		author: "Alexandre Dumas",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg",
		url: "https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo"
	},
	{
		id: "3",
		title: "The Strength of the Few",
		author: "James Islington",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1742965949i/169485073.jpg",
		url: "https://www.goodreads.com/book/show/169485073-the-strength-of-the-few"
	}
];
