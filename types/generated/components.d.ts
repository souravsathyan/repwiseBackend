import type { Schema, Struct } from '@strapi/strapi';

export interface SharedExercises extends Struct.ComponentSchema {
  collectionName: 'components_shared_exercises';
  info: {
    displayName: 'Exercises';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WorkoutExcercise extends Struct.ComponentSchema {
  collectionName: 'components_workout_excercises';
  info: {
    displayName: 'Excercise';
  };
  attributes: {
    exercise: Schema.Attribute.Relation<'oneToOne', 'api::exercise.exercise'>;
    sets: Schema.Attribute.Component<'workout.sets', true>;
  };
}

export interface WorkoutSets extends Struct.ComponentSchema {
  collectionName: 'components_workout_sets';
  info: {
    displayName: 'sets';
  };
  attributes: {
    reps: Schema.Attribute.Integer;
    weight: Schema.Attribute.Decimal;
    weightUnit: Schema.Attribute.Enumeration<['kg', 'lb']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.exercises': SharedExercises;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'workout.excercise': WorkoutExcercise;
      'workout.sets': WorkoutSets;
    }
  }
}
