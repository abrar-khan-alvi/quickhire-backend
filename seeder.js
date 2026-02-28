require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Job = require('./models/Job');
const Application = require('./models/Application');

const seedJobs = [
    {
        title: 'Email Marketing',
        company: 'Revolut',
        location: 'Madrid, Spain',
        type: 'Full Time',
        category: 'Marketing',
        description: 'Revolut is looking for an Email Marketing Specialist to help the team manage campaigns and analyze performance. You will be responsible for creating engaging email content, segmenting audiences, and optimizing open rates.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Revolut_logo.svg/1200px-Revolut_logo.svg.png',
        salary: '$45k - $60k'
    },
    {
        title: 'Brand Designer',
        company: 'Dropbox',
        location: 'San Francisco, US',
        type: 'Full Time',
        category: 'Design',
        description: 'Dropbox is looking for a Brand Designer to help the team translate our brand strategy into visual concepts. You will work closely with marketing and product teams to ensure consistency across all touchpoints.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/2560px-Dropbox_logo_2017.svg.png',
        salary: '$80k - $110k'
    },
    {
        title: 'Visual Designer',
        company: 'Blinkist',
        location: 'Granada, Spain',
        type: 'Part Time',
        category: 'Design',
        description: 'Blinkist is looking for a Visual Designer to help the team design beautiful and engaging content for our app. You should have a strong portfolio showcasing your skills in typography, layout, and color theory.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blinkist_logo.png/600px-Blinkist_logo.png',
        salary: '$30k - $45k'
    },
    {
        title: 'Product Designer',
        company: 'ClassPass',
        location: 'Manchester, UK',
        type: 'Contract',
        category: 'Design',
        description: 'ClassPass is looking for a Product Designer to help us improve our user experience. You will be responsible for conducting user research, creating wireframes, and prototyping new features.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ClassPass_logo.svg/2560px-ClassPass_logo.svg.png',
        salary: '$60k - $80k'
    },
    {
        title: 'Lead Designer',
        company: 'Canva',
        location: 'Ontario, Canada',
        type: 'Full Time',
        category: 'Design',
        description: 'Canva is looking for a Lead Designer to help develop new tools and features for our platform. You will lead a team of designers and work closely with engineers to bring your vision to life.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png',
        salary: '$120k - $150k'
    },
    {
        title: 'Brand Strategist',
        company: 'GoDaddy',
        location: 'Marseille, France',
        type: 'Full Time',
        category: 'Marketing',
        description: 'GoDaddy is looking for a Brand Strategist to join the team and help us define our brand voice and messaging. You will conduct market research and develop strategies to increase brand awareness.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/GoDaddy_logo.svg/2560px-GoDaddy_logo.svg.png',
        salary: '$70k - $90k'
    },
    {
        title: 'Data Analyst',
        company: 'Twitter',
        location: 'San Diego, US',
        type: 'Full Time',
        category: 'Technology',
        description: 'Twitter is looking for a Data Analyst to help the team make data-driven decisions. You will analyze user behavior, track key metrics, and create reports to share with stakeholders.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png',
        salary: '$90k - $120k'
    },
    {
        title: 'Social Media Assistant',
        company: 'Nomad',
        location: 'Paris, France',
        type: 'Internship',
        category: 'Marketing',
        description: 'Nomad is looking for a Social Media Assistant to help manage our social media accounts. You will create content, engage with our community, and track performance metrics.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
        salary: '$20k - $25k'
    }
];

const importData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Job.deleteMany();
        await Application.deleteMany();

        console.log('Existing DB records cleared.');

        // Import seed data
        await Job.insertMany(seedJobs);

        console.log('Dummy jobs seeded successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
