const PUZZLE = [
	{
		id: 1,
		question:
			'Joseph, Kevin, and Nicholas are 33 brothers, and the following statements about them are all true:',
		list: [
			'Joseph is not the youngest.',
			'Kevin is the oldest.',
			'Nicholas is not the oldest.',
			'Place the youngest on the first box and Oldest on the last box.',
		],
		draggables: [
			{
				name: 'Joseph',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png',
			},
			{
				name: 'Kevin',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png',
			},
			{
				name: 'Nicholas',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png',
			},
		],
		answers: ['drag1', 'drag0', 'drag2'],
	},
	{
		id: 2,
		image: 'https://ds055uzetaobb.cloudfront.net/brioche/uploads/TvY8JiPVvOPqN1nhUDFL6d-Course-Logic-Reillustrated-1571-95-OYBsYF.png?width=480',
		question:
			"One of the women above is named Kaylee and the other is named Inara. They each make a statement about who they are as shown.	We know that at least one of them is lying. What color is Inara's dress?",

		draggables: [
			{
				name: 'Joseph',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png',
			},
			{
				name: 'Kevin',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png',
			},
			{
				name: 'Nicholas',
				image: 'https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png',
			},
		],
		answers: ['drag1', 'drag0', 'drag2'],
	},
];

export default PUZZLE;
