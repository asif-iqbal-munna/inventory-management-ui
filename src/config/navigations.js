import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const navigations = [
  {
    icon: <HomeOutlinedIcon />,
    title: 'Home',
    to: '/',
    items: []
  },
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: 'Education',
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: 'Technical Analysis',
        items: [
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'The Dow Theory',
            to: '/thedowtheory'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Charts & Chart Patterns',
            to: '/chart'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Trend & Trend Lines',
            to: '/trendlines'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Support & Resistance',
            to: '/sandr'
          }
        ]
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: 'Fundamental Analysis',
        items: [
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'The Dow Theory',
            to: '/thedowtheory'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Charts & Chart Patterns',
            to: '/chart'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Trend & Trend Lines',
            to: '/trendlines'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Support & Resistance',
            to: '/sandr'
          }
        ]
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: 'Elliot Wave Analysis',
        items: [
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'The Dow Theory',
            to: '/thedowtheory'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Charts & Chart Patterns',
            to: '/chart'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Trend & Trend Lines',
            to: '/trendlines'
          },
          {
            icon: <LocalLibraryOutlinedIcon />,
            title: 'Support & Resistance',
            to: '/sandr'
          }
        ]
      }
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: 'Options',
    to: '/options'
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: 'Blog',
    to: '/blog'
  }
];

export default navigations;
