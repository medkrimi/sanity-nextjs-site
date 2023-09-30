import country from './documents/country'
import deal from './documents/deal'
import destination from './documents/destination'
import duration from './objects/duration'
import home from './singletons/home'
import imageComponent from './objects/imageComponent'
import job from "./job";
import linkComponent from './objects/linkComponent'
import milestone from './objects/milestone'
import page from './documents/page'
import profile from "./profile";
import project from "./project";
import richTextComponent from './objects/richTextComponent'
import settings from './singletons/settings'
import testimonial from './documents/testimonial'
import textComponent from './objects/textComponent'
import timeline from './objects/timeline'

export const schemaTypes = [
    profile, 
    job, 
    project, 
    // Singletons
    home,
    settings,
    // Documents
    deal,
    country,
    destination,
    testimonial,
    page,                 
    // Objects    
    linkComponent,
    imageComponent,
    richTextComponent,
    textComponent,
    duration,
    milestone,
    timeline,
];
