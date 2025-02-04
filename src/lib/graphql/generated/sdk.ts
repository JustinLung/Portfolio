import type { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	BooleanType: { input: any; output: any };
	CustomData: { input: any; output: any };
	Date: { input: any; output: any };
	DateTime: { input: any; output: any };
	FloatType: { input: any; output: any };
	IntType: { input: any; output: any };
	ItemId: { input: any; output: any };
	JsonField: { input: any; output: any };
	MetaTagAttributes: { input: any; output: any };
	UploadId: { input: any; output: any };
};

/** Linking fields */
export enum AboutModelFieldsReferencingClientModel {
	AboutSelectedClients = 'about_selectedClients'
}

/** Linking fields */
export enum AboutModelFieldsReferencingServiceModel {
	AboutSelectedServices = 'about_selectedServices'
}

export type AboutModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	hiddenTitle?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	reel?: InputMaybe<FileFilter>;
	reelImage?: InputMaybe<FileFilter>;
	selectedClients?: InputMaybe<LinksFilter>;
	selectedServices?: InputMaybe<LinksFilter>;
	seo?: InputMaybe<SeoFilter>;
};

export enum AboutModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	HiddenTitleAsc = 'hiddenTitle_ASC',
	HiddenTitleDesc = 'hiddenTitle_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC'
}

/** Record of type About (about) */
export type AboutRecord = RecordInterface & {
	__typename?: 'AboutRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	hiddenTitle?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	recognition: Array<ListItemRecord>;
	reel?: Maybe<FileField>;
	reelImage?: Maybe<FileField>;
	responsiveText?: Maybe<ResponsiveTextRecord>;
	selectedClients: Array<ClientRecord>;
	selectedServices: Array<ServiceRecord>;
	seo?: Maybe<SeoField>;
};

/** Record of type About (about) */
export type AboutRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type BigRecapBlockModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Big (Number) Recap Block (big_recap_block) */
export type BigRecapBlockRecord = RecordInterface & {
	__typename?: 'BigRecapBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	higlight?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	label?: Maybe<Scalars['String']['output']>;
	link?: Maybe<BigRecapBlockModelLinkField>;
};

/** Block of type Big (Number) Recap Block (big_recap_block) */
export type BigRecapBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Big (Number) Recap Block (big_recap_block) */
export type BigRecapBlockRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Big (Number) Recap Block (big_recap_block) */
export type BigRecapBlockRecordHiglightArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type CapabilitiesPageModelContentField =
	| CarouselRecord
	| EmbeddedVideoRecord
	| HalfWidthContentRecord
	| MediaBlockRecord
	| ProjectDataItemRecord
	| RecapRecord
	| RiveRecord
	| SideBySideRecord
	| TextSectionRecord;

/** Linking fields */
export enum CapabilitiesPageModelFieldsReferencingServiceModel {
	CapabilitiesPageContent = 'capabilitiesPage_content',
	CapabilitiesPageContentProjectDataItemServices = 'capabilitiesPage_content__projectDataItem_services'
}

export type CapabilitiesPageModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<CapabilitiesPageModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<CapabilitiesPageModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	seo?: InputMaybe<SeoFilter>;
};

export type CapabilitiesPageModelModularButtonField =
	| ExternalLinkRecord
	| InternalLinkRecord
	| MailtoRecord;

export enum CapabilitiesPageModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC'
}

/** Record of type Capabilities (capabilities_page) */
export type CapabilitiesPageRecord = RecordInterface & {
	__typename?: 'CapabilitiesPageRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content: Array<CapabilitiesPageModelContentField>;
	heroText?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	modularButton?: Maybe<CapabilitiesPageModelModularButtonField>;
	preFooterText?: Maybe<ResponsiveTextRecord>;
	seo?: Maybe<SeoField>;
};

/** Record of type Capabilities (capabilities_page) */
export type CapabilitiesPageRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Simple Carousel (carousel) */
export type CarouselRecord = RecordInterface & {
	__typename?: 'CarouselRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	darkButtons: Scalars['BooleanType']['output'];
	id: Scalars['ItemId']['output'];
	images: Array<FileField>;
};

/** Block of type Simple Carousel (carousel) */
export type CarouselRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type CaseStudyModelContentField =
	| CarouselRecord
	| EmbeddedVideoRecord
	| HalfWidthContentRecord
	| MediaBlockRecord
	| RecapRecord
	| RiveRecord
	| SideBySideRecord
	| TextSectionRecord;

/** Linking fields */
export enum CaseStudyModelFieldsReferencingClientModel {
	CaseStudyClients = 'caseStudy_clients'
}

/** Linking fields */
export enum CaseStudyModelFieldsReferencingSectorModel {
	CaseStudySectors = 'caseStudy_sectors'
}

/** Linking fields */
export enum CaseStudyModelFieldsReferencingServiceModel {
	CaseStudyServices = 'caseStudy_services'
}

export type CaseStudyModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	caseIsHidden?: InputMaybe<BooleanFilter>;
	clients?: InputMaybe<LinksFilter>;
	date?: InputMaybe<DateFilter>;
	descriptionText?: InputMaybe<TextFilter>;
	heroAsset?: InputMaybe<FileFilter>;
	heroAutoplay?: InputMaybe<BooleanFilter>;
	heroControlType?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	overview?: InputMaybe<TextFilter>;
	position?: InputMaybe<PositionFilter>;
	relatedProjects?: InputMaybe<LinksFilter>;
	relatedText?: InputMaybe<StringFilter>;
	sectors?: InputMaybe<LinksFilter>;
	seo?: InputMaybe<SeoFilter>;
	services?: InputMaybe<LinksFilter>;
	slug?: InputMaybe<SlugFilter>;
	subtitle?: InputMaybe<StringFilter>;
	thumbnail?: InputMaybe<FileFilter>;
	thumbnailOnHover?: InputMaybe<FileFilter>;
	timeline?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	wipCase?: InputMaybe<BooleanFilter>;
};

export enum CaseStudyModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	CaseIsHiddenAsc = 'caseIsHidden_ASC',
	CaseIsHiddenDesc = 'caseIsHidden_DESC',
	DateAsc = 'date_ASC',
	DateDesc = 'date_DESC',
	HeroAutoplayAsc = 'heroAutoplay_ASC',
	HeroAutoplayDesc = 'heroAutoplay_DESC',
	HeroControlTypeAsc = 'heroControlType_ASC',
	HeroControlTypeDesc = 'heroControlType_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PositionAsc = 'position_ASC',
	PositionDesc = 'position_DESC',
	RelatedTextAsc = 'relatedText_ASC',
	RelatedTextDesc = 'relatedText_DESC',
	SubtitleAsc = 'subtitle_ASC',
	SubtitleDesc = 'subtitle_DESC',
	TimelineAsc = 'timeline_ASC',
	TimelineDesc = 'timeline_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	WipCaseAsc = 'wipCase_ASC',
	WipCaseDesc = 'wipCase_DESC'
}

/** Record of type Case Study (case_study) */
export type CaseStudyRecord = RecordInterface & {
	__typename?: 'CaseStudyRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	awards: Array<ListItemRecord>;
	caseIsHidden: Scalars['BooleanType']['output'];
	clients: Array<ClientRecord>;
	content: Array<CaseStudyModelContentField>;
	credits: Array<CreditListRecord>;
	date?: Maybe<Scalars['Date']['output']>;
	descriptionText?: Maybe<Scalars['String']['output']>;
	heroAsset?: Maybe<FileField>;
	heroAutoplay: Scalars['BooleanType']['output'];
	heroControlType?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	overview?: Maybe<Scalars['String']['output']>;
	position?: Maybe<Scalars['IntType']['output']>;
	projectLinks: Array<ListItemRecord>;
	relatedProjects: Array<CaseStudyRecord>;
	relatedText?: Maybe<Scalars['String']['output']>;
	sectors: Array<SectorRecord>;
	seo?: Maybe<SeoField>;
	services: Array<ServiceRecord>;
	slug?: Maybe<Scalars['String']['output']>;
	subtitle?: Maybe<Scalars['String']['output']>;
	thumbnail?: Maybe<FileField>;
	thumbnailOnHover?: Maybe<FileField>;
	timeline?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	wipCase: Scalars['BooleanType']['output'];
};

/** Record of type Case Study (case_study) */
export type CaseStudyRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case Study (case_study) */
export type CaseStudyRecordDescriptionTextArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type Case Study (case_study) */
export type CaseStudyRecordOverviewArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClientModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	name?: InputMaybe<StringFilter>;
	position?: InputMaybe<PositionFilter>;
};

export enum ClientModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PositionAsc = 'position_ASC',
	PositionDesc = 'position_DESC'
}

/** Record of type Clients (client) */
export type ClientRecord = RecordInterface & {
	__typename?: 'ClientRecord';
	_allReferencingAbouts: Array<AboutRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingAboutsMeta: CollectionMetadata;
	_allReferencingCaseStudies: Array<CaseStudyRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingCaseStudiesMeta: CollectionMetadata;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	name?: Maybe<Scalars['String']['output']>;
	position?: Maybe<Scalars['IntType']['output']>;
};

/** Record of type Clients (client) */
export type ClientRecord_AllReferencingAboutsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<AboutModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndClient>;
};

/** Record of type Clients (client) */
export type ClientRecord_AllReferencingAboutsMetaArgs = {
	filter?: InputMaybe<AboutModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndClient>;
};

/** Record of type Clients (client) */
export type ClientRecord_AllReferencingCaseStudiesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndClient>;
};

/** Record of type Clients (client) */
export type ClientRecord_AllReferencingCaseStudiesMetaArgs = {
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndClient>;
};

/** Record of type Clients (client) */
export type ClientRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
	__typename?: 'CollectionMetadata';
	count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
	Black = 'black',
	Blue = 'blue',
	Brown = 'brown',
	Cyan = 'cyan',
	Green = 'green',
	Grey = 'grey',
	Orange = 'orange',
	Pink = 'pink',
	Purple = 'purple',
	Red = 'red',
	White = 'white',
	Yellow = 'yellow'
}

export type ColorField = {
	__typename?: 'ColorField';
	alpha: Scalars['IntType']['output'];
	blue: Scalars['IntType']['output'];
	cssRgb: Scalars['String']['output'];
	green: Scalars['IntType']['output'];
	hex: Scalars['String']['output'];
	red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Credit List (credit_list) */
export type CreditListRecord = RecordInterface & {
	__typename?: 'CreditListRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	label?: Maybe<Scalars['String']['output']>;
	listItem: Array<ListItemRecord>;
};

/** Block of type Credit List (credit_list) */
export type CreditListRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Credits (credit) */
export type CreditRecord = RecordInterface & {
	__typename?: 'CreditRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	creditsPerCategory: Array<CreditListRecord>;
	id: Scalars['ItemId']['output'];
};

/** Block of type Credits (credit) */
export type CreditRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['Date']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['Date']['input']>;
	/** Filter records with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['Date']['input']>;
	/** Filter records with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['Date']['input']>;
	/** Filter records with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['Date']['input']>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Block of type Embedded Video (embedded_video) */
export type EmbeddedVideoRecord = RecordInterface & {
	__typename?: 'EmbeddedVideoRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	source?: Maybe<Scalars['String']['output']>;
	videoId?: Maybe<Scalars['String']['output']>;
};

/** Block of type Embedded Video (embedded_video) */
export type EmbeddedVideoRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type External Link (external_link) */
export type ExternalLinkRecord = RecordInterface & {
	__typename?: 'ExternalLinkRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	title?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
};

/** Block of type External Link (external_link) */
export type ExternalLinkRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
	AppleTouchIcon = 'appleTouchIcon',
	Icon = 'icon',
	MsApplication = 'msApplication'
}

/** Block of type Featured Project (featured_cases_block) */
export type FeaturedCasesBlockRecord = RecordInterface & {
	__typename?: 'FeaturedCasesBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	case?: Maybe<CaseStudyRecord>;
	highlighted: Scalars['BooleanType']['output'];
	id: Scalars['ItemId']['output'];
	standalone: Scalars['BooleanType']['output'];
};

/** Block of type Featured Project (featured_cases_block) */
export type FeaturedCasesBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type FileField = FileFieldInterface & {
	__typename?: 'FileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldInterfaceAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldInterfaceCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldInterfaceTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
	/** Search for records with an exact match. The specified value must be an Upload ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that have one of the specified uploads */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude records with an exact match. The specified value must be an Upload ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records that do not have one of the specified uploads */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Record of type 404 (four_o_four) */
export type FourOFourRecord = RecordInterface & {
	__typename?: 'FourOFourRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	internalLink?: Maybe<InternalLinkRecord>;
};

/** Record of type 404 (four_o_four) */
export type FourOFourRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 404 (four_o_four) */
export type FourOFourRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlobalSeoField = {
	__typename?: 'GlobalSeoField';
	facebookPageUrl?: Maybe<Scalars['String']['output']>;
	fallbackSeo?: Maybe<SeoField>;
	siteName?: Maybe<Scalars['String']['output']>;
	titleSuffix?: Maybe<Scalars['String']['output']>;
	twitterAccount?: Maybe<Scalars['String']['output']>;
};

export type HalfWidthContentModelContentField =
	| CarouselRecord
	| MediaBlockRecord
	| RiveRecord
	| TextSectionRecord;

/** Block of type Half Width Content (half_width_content) */
export type HalfWidthContentRecord = RecordInterface & {
	__typename?: 'HalfWidthContentRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<HalfWidthContentModelContentField>;
	id: Scalars['ItemId']['output'];
	side?: Maybe<Scalars['String']['output']>;
};

/** Block of type Half Width Content (half_width_content) */
export type HalfWidthContentRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type HomeModelModularButtonField = ExternalLinkRecord | InternalLinkRecord | MailtoRecord;

/** Record of type Home (home) */
export type HomeRecord = RecordInterface & {
	__typename?: 'HomeRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	featuredCases: Array<FeaturedCasesBlockRecord>;
	heroText?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	modularButton?: Maybe<HomeModelModularButtonField>;
	preFooterText?: Maybe<ResponsiveTextRecord>;
	seo?: Maybe<SeoField>;
};

/** Record of type Home (home) */
export type HomeRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Media Component (idea_media_block) */
export type IdeaMediaBlockRecord = RecordInterface & {
	__typename?: 'IdeaMediaBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	autoplay: Scalars['BooleanType']['output'];
	controlType?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	media: Array<FileField>;
};

/** Block of type Media Component (idea_media_block) */
export type IdeaMediaBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type IdeaModelContentBlocksField =
	| EmbeddedVideoRecord
	| IdeaMediaBlockRecord
	| SideBySideRecord;

export type IdeaModelContentField = {
	__typename?: 'IdeaModelContentField';
	blocks: Array<IdeaModelContentBlocksField>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type IdeaModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<IdeaModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<IdeaModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	content?: InputMaybe<StructuredTextFilter>;
	id?: InputMaybe<ItemIdFilter>;
	position?: InputMaybe<PositionFilter>;
	relatedIdeas?: InputMaybe<LinksFilter>;
	relatedText?: InputMaybe<StringFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
	subtitle?: InputMaybe<StringFilter>;
	thumbnail?: InputMaybe<FileFilter>;
	title?: InputMaybe<StringFilter>;
};

export enum IdeaModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PositionAsc = 'position_ASC',
	PositionDesc = 'position_DESC',
	RelatedTextAsc = 'relatedText_ASC',
	RelatedTextDesc = 'relatedText_DESC',
	SubtitleAsc = 'subtitle_ASC',
	SubtitleDesc = 'subtitle_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC'
}

/** Record of type Idea (idea) */
export type IdeaRecord = RecordInterface & {
	__typename?: 'IdeaRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<IdeaModelContentField>;
	credits: Array<CreditListRecord>;
	description?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	position?: Maybe<Scalars['IntType']['output']>;
	relatedIdeas: Array<IdeaRecord>;
	relatedText?: Maybe<Scalars['String']['output']>;
	seo?: Maybe<SeoField>;
	slug?: Maybe<Scalars['String']['output']>;
	subtitle?: Maybe<Scalars['String']['output']>;
	thumbnail?: Maybe<FileField>;
	title?: Maybe<Scalars['String']['output']>;
};

/** Record of type Idea (idea) */
export type IdeaRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type IdeasCollectionPageModelModularButtonField =
	| ExternalLinkRecord
	| InternalLinkRecord
	| MailtoRecord;

/** Record of type Ideas Collection Page (ideas_collection_page) */
export type IdeasCollectionPageRecord = RecordInterface & {
	__typename?: 'IdeasCollectionPageRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	heading?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	modularButton?: Maybe<IdeasCollectionPageModelModularButtonField>;
	preFooterText?: Maybe<ResponsiveTextRecord>;
	seo?: Maybe<SeoField>;
	showStickyButton: Scalars['BooleanType']['output'];
	stickyButtonLink?: Maybe<ExternalLinkRecord>;
	stickyButtonThumbnail?: Maybe<FileField>;
	stickyButtonTitle?: Maybe<Scalars['String']['output']>;
};

/** Record of type Ideas Collection Page (ideas_collection_page) */
export type IdeasCollectionPageRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Ideas Collection Page (ideas_collection_page) */
export type IdeasCollectionPageRecordStickyButtonTitleArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImgixParams = {
	/**
	 * Aspect Ratio
	 *
	 * Specifies an aspect ratio to maintain when resizing and cropping the image
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
	 */
	ar?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Automatic
	 *
	 * Applies automatic enhancements to images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
	 */
	auto?: InputMaybe<Array<ImgixParamsAuto>>;
	/**
	 * Background Color
	 *
	 * Colors the background of padded and partially-transparent images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
	 */
	bg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Removal
	 *
	 * Removes background from image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
	 */
	bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Removal Fallback
	 *
	 * Overrides default fallback behavior for bg-remove failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
	 */
	bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement
	 *
	 * Replaces background from image using a string based prompt.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
	 */
	bgReplace?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Removal Fallback
	 *
	 * Overrides default fallback behavior for bg-replace failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
	 */
	bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement Negative Prompt
	 *
	 * Provides a negative text suggestion for background replacement.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
	 */
	bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend
	 *
	 * Specifies the location of the blend image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
	 */
	blend?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Align
	 *
	 * Changes the blend alignment relative to the parent image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
	 */
	blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
	/**
	 * Blend Alpha
	 *
	 * Changes the alpha of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
	 */
	blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Color
	 *
	 * Specifies a color to use when applying the blend.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
	 */
	blendColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Crop
	 *
	 * Specifies the type of crop for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
	 */
	blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
	/**
	 * Blend Fit
	 *
	 * Specifies the fit mode for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
	 */
	blendFit?: InputMaybe<ImgixParamsBlendFit>;
	/**
	 * Blend Height
	 *
	 * Adjusts the height of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
	 */
	blendH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend Mode
	 *
	 * Sets the blend mode for a blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
	 */
	blendMode?: InputMaybe<ImgixParamsBlendMode>;
	/**
	 * Blend Padding
	 *
	 * Applies padding to the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
	 */
	blendPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Size
	 *
	 * Adjusts the size of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
	 */
	blendSize?: InputMaybe<ImgixParamsBlendSize>;
	/**
	 * Blend Width
	 *
	 * Adjusts the width of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
	 */
	blendW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend X Position
	 *
	 * Adjusts the x-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
	 */
	blendX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Y Position
	 *
	 * Adjusts the y-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
	 */
	blendY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Gaussian Blur
	 *
	 * Applies a gaussian blur to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
	 */
	blur?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Size & Color
	 *
	 * Applies a border to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
	 */
	border?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Bottom
	 *
	 * Sets bottom border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
	 */
	borderBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Left
	 *
	 * Sets left border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
	 */
	borderLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Outer Border Radius
	 *
	 * Sets the outer radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
	 */
	borderRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Inner Border Radius
	 *
	 * Sets the inner radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
	 */
	borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Right
	 *
	 * Sets right border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
	 */
	borderRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Top
	 *
	 * Sets top border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
	 */
	borderTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Brightness
	 *
	 * Adjusts the brightness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
	 */
	bri?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Client Hints
	 *
	 * Sets one or more Client-Hints headers
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
	 */
	ch?: InputMaybe<Array<ImgixParamsCh>>;
	/**
	 * Chroma Subsampling
	 *
	 * Specifies the output chroma subsampling rate.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
	 */
	chromasub?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Quantization
	 *
	 * Limits the number of unique colors in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
	 */
	colorquant?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Palette Color Count
	 *
	 * Specifies how many colors to include in a palette-extraction response.
	 *
	 * Depends on: `palette`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
	 */
	colors?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Contrast
	 *
	 * Adjusts the contrast of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
	 */
	con?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Corner Radius
	 *
	 * Specifies the radius value for a rounded corner mask.
	 *
	 * Depends on: `mask=corners`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
	 */
	cornerRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Crop Mode
	 *
	 * Specifies how to crop an image.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
	 */
	crop?: InputMaybe<Array<ImgixParamsCrop>>;
	/**
	 * Color Space
	 *
	 * Specifies the color space of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
	 */
	cs?: InputMaybe<ImgixParamsCs>;
	/**
	 * Download
	 *
	 * Forces a URL to use send-file in its response.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
	 */
	dl?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Dots Per Inch
	 *
	 * Sets the DPI value in the EXIF header.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
	 */
	dpi?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Device Pixel Ratio
	 *
	 * Adjusts the device-pixel ratio of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
	 */
	dpr?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Duotone
	 *
	 * Applies a duotone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
	 */
	duotone?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Duotone Alpha
	 *
	 * Changes the alpha of the duotone effect atop the source image.
	 *
	 * Depends on: `duotone`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
	 */
	duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Exposure
	 *
	 * Adjusts the exposure of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
	 */
	exp?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Url Expiration Timestamp
	 *
	 * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
	 */
	expires?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Index
	 *
	 * Selects a face to crop to.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
	 */
	faceindex?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Padding
	 *
	 * Adjusts padding around a selected face.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
	 */
	facepad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Json Face Data
	 *
	 * Specifies that face data should be included in output when combined with `fm=json`.
	 *
	 * Depends on: `fm=json`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
	 */
	faces?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Mode
	 *
	 * Determines how to fill in additional space created by the fit setting
	 *
	 * Depends on: `fit`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
	 */
	fill?: InputMaybe<ImgixParamsFill>;
	/**
	 * Fill Color
	 *
	 * Sets the fill color for images with additional space created by the fit setting
	 *
	 * Depends on: `fill=solid`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
	 */
	fillColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Fallback
	 *
	 * Sets the fallback behavior for generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
	 */
	fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Fill Generative Negative Prompt
	 *
	 * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
	 */
	fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Position
	 *
	 * Sets the position of the Origin Image in relation to the generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
	 */
	fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
	/**
	 * Fill Generative Prompt
	 *
	 * Provides a text suggestion to the generative fill parameter.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
	 */
	fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Seed
	 *
	 * Sets the generative seed value. Used to generate similar outputs from different prompts.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
	 */
	fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Gradient Color Space
	 *
	 * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
	 */
	fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
	/**
	 * Fill Gradient Linear
	 *
	 * Blends a gradient between two colors, {color1} and {color2}, along a straight path
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
	 */
	fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Linear Direction
	 *
	 * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
	 */
	fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
	/**
	 * Fill Gradient Radial
	 *
	 * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
	 */
	fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial Radius
	 *
	 * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
	 */
	fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial X
	 *
	 * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
	 */
	fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Radial Y
	 *
	 * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
	 */
	fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Type
	 *
	 * Specifies if a gradient is radial (circular) or linear (straight)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
	 */
	fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
	/**
	 * Resize Fit Mode
	 *
	 * Specifies how to map the source image to the output image dimensions.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
	 */
	fit?: InputMaybe<ImgixParamsFit>;
	/**
	 * Flip Axis
	 *
	 * Flips an image on a specified axis.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
	 */
	flip?: InputMaybe<ImgixParamsFlip>;
	/**
	 * Output Format
	 *
	 * Changes the format of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
	 */
	fm?: InputMaybe<ImgixParamsFm>;
	/**
	 * Focal Point Debug
	 *
	 * Displays crosshairs identifying the location of the set focal point
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
	 */
	fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Focal Point X Position
	 *
	 * Sets the relative horizontal value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
	 */
	fpX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Y Position
	 *
	 * Sets the relative vertical value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
	 */
	fpY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Zoom
	 *
	 * Sets the relative zoom value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
	 */
	fpZ?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frames Per Second
	 *
	 * Specifies the framerate of the generated image.
	 */
	fps?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Selection
	 *
	 * Specifies the frame of an animated image to use.
	 */
	frame?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Gamma
	 *
	 * Adjusts the gamma of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
	 */
	gam?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Animated Gif Quality
	 *
	 * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
	 *
	 * Depends on: `fm=gif`
	 */
	gifQ?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Grid Colors
	 *
	 * Sets grid colors for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 */
	gridColors?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Grid Size
	 *
	 * Sets grid size for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 */
	gridSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Height
	 *
	 * Adjusts the height of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
	 */
	h?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Highlight
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
	 */
	high?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Halftone
	 *
	 * Applies a half-tone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
	 */
	htn?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Hue Shift
	 *
	 * Adjusts the hue of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
	 */
	hue?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Interval
	 *
	 * Displays every Nth frame starting with the first frame.
	 */
	interval?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Invert
	 *
	 * Inverts the colors on the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
	 */
	invert?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Iptc Passthrough
	 *
	 * Determine if IPTC data should be passed for JPEG images.
	 */
	iptc?: InputMaybe<ImgixParamsIptc>;
	/**
	 * Jpg Progressive
	 *
	 * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
	 */
	jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Animation Loop Count
	 *
	 * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
	 */
	loop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Lossless Compression
	 *
	 * Specifies that the output image should be a lossless variant.
	 *
	 * Depends on: `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
	 */
	lossless?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Watermark Image Url
	 *
	 * Specifies the location of the watermark image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
	 */
	mark?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Alignment Mode
	 *
	 * Changes the watermark alignment relative to the parent image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
	 */
	markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
	/**
	 * Watermark Alpha
	 *
	 * Changes the alpha of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
	 */
	markAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Base Url
	 *
	 * Changes base URL of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
	 */
	markBase?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Fit Mode
	 *
	 * Specifies the fit mode for watermark images.
	 *
	 * Depends on: `mark`, `markw`, `markh`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
	 */
	markFit?: InputMaybe<ImgixParamsMarkFit>;
	/**
	 * Watermark Height
	 *
	 * Adjusts the height of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
	 */
	markH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark Padding
	 *
	 * Applies padding to the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
	 */
	markPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Rotation
	 *
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
	 */
	markRot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark Scale
	 *
	 * Adjusts the scale of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
	 */
	markScale?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Tile
	 *
	 * Adds tiled watermark.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
	 */
	markTile?: InputMaybe<ImgixParamsMarkTile>;
	/**
	 * Watermark Width
	 *
	 * Adjusts the width of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
	 */
	markW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark X Position
	 *
	 * Adjusts the x-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
	 */
	markX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Y Position
	 *
	 * Adjusts the y-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
	 */
	markY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Type
	 *
	 * Defines the type of mask and specifies the URL if that type is selected.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
	 */
	mask?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Mask Background Color
	 *
	 * Colors the background of the transparent mask area of images
	 *
	 * Depends on: `mask`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
	 */
	maskBg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Maximum Height
	 *
	 * Specifies the maximum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
	 */
	maxH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Maximum Width
	 *
	 * Specifies the maximum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
	 */
	maxW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Height
	 *
	 * Specifies the minimum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
	 */
	minH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Width
	 *
	 * Specifies the minimum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
	 */
	minW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Monochrome
	 *
	 * Applies a monochrome effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
	 */
	monochrome?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Noise Reduction Bound
	 *
	 * Reduces the noise in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
	 */
	nr?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Noise Reduction Sharpen
	 *
	 * Provides a threshold by which to sharpen an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
	 */
	nrs?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Orientation
	 *
	 * Changes the image orientation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
	 */
	orient?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding
	 *
	 * Pads an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
	 */
	pad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Bottom
	 *
	 * Sets bottom padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
	 */
	padBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Left
	 *
	 * Sets left padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
	 */
	padLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Right
	 *
	 * Sets right padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
	 */
	padRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Top
	 *
	 * Sets top padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
	 */
	padTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Pdf Page Number
	 *
	 * Selects a page from a PDF for display.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
	 */
	page?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Palette Extraction
	 *
	 * Specifies an output format for palette-extraction.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
	 */
	palette?: InputMaybe<ImgixParamsPalette>;
	/**
	 * Pdf Annotation
	 *
	 * Enables or disables PDF annotation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
	 */
	pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Css Prefix
	 *
	 * Specifies a CSS prefix for all classes in palette-extraction.
	 *
	 * Depends on: `palette=css`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
	 */
	prefix?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Pixellate
	 *
	 * Applies a pixelation effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
	 */
	px?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Output Quality
	 *
	 * Adjusts the quality of an output image.
	 *
	 * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
	 */
	q?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Source Rectangle Region
	 *
	 * Crops an image to a specified rectangle.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
	 */
	rect?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Reverse
	 *
	 * Reverses the frame order on the source animation.
	 */
	reverse?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Rotation
	 *
	 * Rotates an image by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
	 */
	rot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Saturation
	 *
	 * Adjusts the saturation of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
	 */
	sat?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Sepia Tone
	 *
	 * Applies a sepia effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
	 */
	sepia?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Shadow
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
	 */
	shad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Sharpen
	 *
	 * Adjusts the sharpness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
	 */
	sharp?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frame Skip
	 *
	 * Skips every Nth frame starting with the first frame.
	 */
	skip?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
	 *
	 * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
	 */
	skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Sanitize Svg
	 *
	 * Specifies whether to sanitize an SVG.
	 */
	svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Transparency
	 *
	 * Adds checkerboard behind images which support transparency.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
	 */
	transparency?: InputMaybe<ImgixParamsTransparency>;
	/**
	 * Trim Image
	 *
	 * Trims the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
	 */
	trim?: InputMaybe<ImgixParamsTrim>;
	/**
	 * Trim Color
	 *
	 * Specifies a trim color on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
	 */
	trimColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Trim Mean Difference
	 *
	 * Specifies the mean difference on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
	 */
	trimMd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Padding
	 *
	 * Pads the area of the source image before trimming.
	 *
	 * Depends on: `trim`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
	 */
	trimPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Trim Standard Deviation
	 *
	 * Specifies the standard deviation on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
	 */
	trimSd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Tolerance
	 *
	 * Specifies the tolerance on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
	 */
	trimTol?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text String
	 *
	 * Sets the text string to render.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
	 */
	txt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Align
	 *
	 * Sets the vertical and horizontal alignment of rendered text relative to the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
	 */
	txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
	/**
	 * Text Clipping Mode
	 *
	 * Sets the clipping properties of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
	 */
	txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
	/**
	 * Text Color
	 *
	 * Specifies the color of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
	 */
	txtColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Fit Mode
	 *
	 * Specifies the fit approach for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
	 */
	txtFit?: InputMaybe<ImgixParamsTxtFit>;
	/**
	 * Text Font
	 *
	 * Selects a font for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
	 */
	txtFont?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Leading
	 *
	 * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
	 */
	txtLead?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline
	 *
	 * Outlines the rendered text with a specified color.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
	 */
	txtLine?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline Color
	 *
	 * Specifies a text outline color.
	 *
	 * Depends on: `txt`, `txtline`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
	 */
	txtLineColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Padding
	 *
	 * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
	 */
	txtPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Shadow
	 *
	 * Applies a shadow to rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
	 */
	txtShad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text Font Size
	 *
	 * Sets the font size of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
	 */
	txtSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Tracking
	 *
	 * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
	 */
	txtTrack?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Width
	 *
	 * Sets the width of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
	 */
	txtWidth?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text X Position
	 *
	 * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
	 */
	txtX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Y Position
	 *
	 * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
	 */
	txtY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Super Resolution
	 *
	 * Uses generative AI fill to upscale low resolution images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
	 */
	upscale?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Super Resolution Fallback
	 *
	 * Overrides default fallback behavior for super resolution failures
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
	 */
	upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Unsharp Mask
	 *
	 * Sharpens the source image using an unsharp mask.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
	 */
	usm?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Unsharp Mask Radius
	 *
	 * Specifies the radius for an unsharp mask operation.
	 *
	 * Depends on: `usm`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
	 */
	usmrad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Vibrance
	 *
	 * Adjusts the vibrance of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
	 */
	vib?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Width
	 *
	 * Adjusts the width of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
	 */
	w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
	Compress = 'compress',
	Enhance = 'enhance',
	Format = 'format',
	Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsBlendCrop {
	Bottom = 'bottom',
	Faces = 'faces',
	Left = 'left',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsBlendFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Max = 'max',
	Scale = 'scale'
}

export enum ImgixParamsBlendMode {
	Burn = 'burn',
	Color = 'color',
	Darken = 'darken',
	Difference = 'difference',
	Dodge = 'dodge',
	Exclusion = 'exclusion',
	Hardlight = 'hardlight',
	Hue = 'hue',
	Lighten = 'lighten',
	Luminosity = 'luminosity',
	Multiply = 'multiply',
	Normal = 'normal',
	Overlay = 'overlay',
	Saturation = 'saturation',
	Screen = 'screen',
	Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
	Inherit = 'inherit'
}

export enum ImgixParamsCh {
	Dpr = 'dpr',
	SaveData = 'saveData',
	Width = 'width'
}

export enum ImgixParamsCrop {
	Bottom = 'bottom',
	Edges = 'edges',
	Entropy = 'entropy',
	Faces = 'faces',
	Focalpoint = 'focalpoint',
	Left = 'left',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsCs {
	Adobergb1998 = 'adobergb1998',
	Srgb = 'srgb',
	Strip = 'strip',
	Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
	Blur = 'blur',
	Gen = 'gen',
	Generative = 'generative',
	Gradient = 'gradient',
	Solid = 'solid'
}

export enum ImgixParamsFillGenPos {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsFillGradientCs {
	Hsl = 'hsl',
	Lch = 'lch',
	Linear = 'linear',
	Oklab = 'oklab',
	Srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
	Bottom = 'bottom',
	Left = 'left',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsFillGradientType {
	Linear = 'linear',
	Radial = 'radial'
}

export enum ImgixParamsFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Facearea = 'facearea',
	Fill = 'fill',
	Fillmax = 'fillmax',
	Max = 'max',
	Min = 'min',
	Scale = 'scale'
}

export enum ImgixParamsFlip {
	H = 'h',
	Hv = 'hv',
	V = 'v'
}

export enum ImgixParamsFm {
	Avif = 'avif',
	Blurhash = 'blurhash',
	Gif = 'gif',
	Jp2 = 'jp2',
	Jpg = 'jpg',
	Json = 'json',
	Jxr = 'jxr',
	Mp4 = 'mp4',
	Pjpg = 'pjpg',
	Png = 'png',
	Png8 = 'png8',
	Png32 = 'png32',
	Webm = 'webm',
	Webp = 'webp'
}

export enum ImgixParamsIptc {
	Allow = 'allow',
	Block = 'block'
}

export enum ImgixParamsMarkAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsMarkFit {
	Clip = 'clip',
	Crop = 'crop',
	Fill = 'fill',
	Max = 'max',
	Scale = 'scale'
}

export enum ImgixParamsMarkTile {
	Grid = 'grid'
}

export enum ImgixParamsPalette {
	Css = 'css',
	Json = 'json'
}

export enum ImgixParamsTransparency {
	Grid = 'grid'
}

export enum ImgixParamsTrim {
	Auto = 'auto',
	Color = 'color'
}

export enum ImgixParamsTxtAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top'
}

export enum ImgixParamsTxtClip {
	Ellipsis = 'ellipsis',
	End = 'end',
	Middle = 'middle',
	Start = 'start'
}

export enum ImgixParamsTxtFit {
	Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
	/** Search uploads that are currently used by some record or not */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Internal Link (internal_link) */
export type InternalLinkRecord = RecordInterface & {
	__typename?: 'InternalLinkRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	internalLink?: Maybe<RouteRecord>;
	label?: Maybe<Scalars['String']['output']>;
};

/** Block of type Internal Link (internal_link) */
export type InternalLinkRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAboutAndClient = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<AboutModelFieldsReferencingClientModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<AboutModelFieldsReferencingClientModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAboutAndService = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<AboutModelFieldsReferencingServiceModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<AboutModelFieldsReferencingServiceModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCapabilitiesPageAndService = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<CapabilitiesPageModelFieldsReferencingServiceModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<CapabilitiesPageModelFieldsReferencingServiceModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCaseStudyAndClient = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingClientModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingClientModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCaseStudyAndSector = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingSectorModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingSectorModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCaseStudyAndService = {
	/** Filter linking records that reference current record in at least one of the specified fields */
	anyIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingServiceModel>>;
	/** Filter linking records that do not reference current record in any of the specified fields */
	notIn?: InputMaybe<Array<CaseStudyModelFieldsReferencingServiceModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAboutAndClient = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndClient>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAboutAndService = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndService>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCapabilitiesPageAndService = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCapabilitiesPageAndService>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCaseStudyAndClient = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCaseStudyAndClient>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCaseStudyAndSector = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCaseStudyAndSector>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCaseStudyAndService = {
	/** Specifies how to filter by linking fields */
	fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCaseStudyAndService>;
	/** Specifies how to filter by linking locales */
	locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
	/** Search the record with the specified ID */
	eq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Exclude the record with the specified ID */
	neq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
	Draft = 'draft',
	Published = 'published',
	Updated = 'updated'
}

export type LegalModelContentField = {
	__typename?: 'LegalModelContentField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type LegalModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<LegalModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<LegalModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	content?: InputMaybe<StructuredTextFilter>;
	id?: InputMaybe<ItemIdFilter>;
	name?: InputMaybe<StringFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum LegalModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC'
}

/** Record of type Legal (legal) */
export type LegalRecord = RecordInterface & {
	__typename?: 'LegalRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<LegalModelContentField>;
	heading?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	name?: Maybe<Scalars['String']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
};

/** Record of type Legal (legal) */
export type LegalRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Linking locales */
export enum LinkingLocale {
	NonLocalized = '_nonLocalized',
	En = 'en'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
	/** Filter linking records that link to current record in at least one of the specified locales */
	anyIn?: InputMaybe<Array<LinkingLocale>>;
	/** Filter linking records that do not link to current record in any of the specified locales */
	notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
	/** Filter records linked to all of the specified records. The specified values must be Record IDs */
	allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
	anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Search for records with an exact match. The specified values must be Record IDs */
	eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records not linked to any of the specified records. The specified values must be Record IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Block of type List Item (list_item) */
export type ListItemRecord = RecordInterface & {
	__typename?: 'ListItemRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	listItem?: Maybe<Scalars['String']['output']>;
	optionalExternalLink?: Maybe<Scalars['String']['output']>;
};

/** Block of type List Item (list_item) */
export type ListItemRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type MailTo (mailto) */
export type MailtoRecord = RecordInterface & {
	__typename?: 'MailtoRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	email?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	label?: Maybe<Scalars['String']['output']>;
};

/** Block of type MailTo (mailto) */
export type MailtoRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Media (media_block) */
export type MediaBlockRecord = RecordInterface & {
	__typename?: 'MediaBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	autoplay: Scalars['BooleanType']['output'];
	controlType?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	media?: Maybe<FileField>;
};

/** Block of type Media (media_block) */
export type MediaBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type MixedListModelListItemsField = ExternalLinkRecord | ListItemRecord;

/** Block of type Mixed List (mixed_list) */
export type MixedListRecord = RecordInterface & {
	__typename?: 'MixedListRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	listItems: Array<MixedListModelListItemsField>;
};

/** Block of type Mixed List (mixed_list) */
export type MixedListRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type ModularButtonModelModularButtonField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Modular Button (modular_button) */
export type ModularButtonRecord = RecordInterface & {
	__typename?: 'ModularButtonRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	modularButton?: Maybe<ModularButtonModelModularButtonField>;
};

/** Block of type Modular Button (modular_button) */
export type ModularButtonRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
	Gif = 'gif',
	Jpg = 'jpg',
	Png = 'png'
}

/** Record of type Navigation (navigation) */
export type NavigationRecord = RecordInterface & {
	__typename?: 'NavigationRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	contactEmail?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	mobileNavFooter?: Maybe<ResponsiveTextRecord>;
	navigationItems: Array<RouteRecord>;
};

/** Record of type Navigation (navigation) */
export type NavigationRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
	/** Search uploads with the specified orientation */
	eq?: InputMaybe<UploadOrientation>;
	/** Exclude uploads with the specified orientation */
	neq?: InputMaybe<UploadOrientation>;
};

export type PersonalizedCollectionModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<PersonalizedCollectionModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<PersonalizedCollectionModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	cases?: InputMaybe<LinksFilter>;
	collectionName?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export type PersonalizedCollectionModelModularButtonField =
	| ExternalLinkRecord
	| InternalLinkRecord
	| MailtoRecord;

export enum PersonalizedCollectionModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	CollectionNameAsc = 'collectionName_ASC',
	CollectionNameDesc = 'collectionName_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC'
}

/** Record of type Personalized Collection (personalized_collection) */
export type PersonalizedCollectionRecord = RecordInterface & {
	__typename?: 'PersonalizedCollectionRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	cases: Array<CaseStudyRecord>;
	collectionName?: Maybe<Scalars['String']['output']>;
	heroText?: Maybe<ResponsiveTextRecord>;
	id: Scalars['ItemId']['output'];
	modularButton?: Maybe<PersonalizedCollectionModelModularButtonField>;
	preFooterText?: Maybe<ResponsiveTextRecord>;
	seo?: Maybe<SeoField>;
	slug?: Maybe<Scalars['String']['output']>;
};

/** Record of type Personalized Collection (personalized_collection) */
export type PersonalizedCollectionRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Project Data (project_data_item) */
export type ProjectDataItemRecord = RecordInterface & {
	__typename?: 'ProjectDataItemRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	descriptionText?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	services: Array<ServiceRecord>;
	subtitle?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
};

/** Block of type Project Data (project_data_item) */
export type ProjectDataItemRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Project Data (project_data_item) */
export type ProjectDataItemRecordDescriptionTextArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
	__typename?: 'Query';
	/** Returns meta information regarding a record collection */
	_allCaseStudiesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allClientsMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allIdeasMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allLegalsMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allPersonalizedCollectionsMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allRoutesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allSectorsMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allServicesMeta: CollectionMetadata;
	/** Returns meta information regarding an assets collection */
	_allUploadsMeta: CollectionMetadata;
	/** Returns the single instance record */
	_site: Site;
	/** Returns the single instance record */
	about?: Maybe<AboutRecord>;
	/** Returns a collection of records */
	allCaseStudies: Array<CaseStudyRecord>;
	/** Returns a collection of records */
	allClients: Array<ClientRecord>;
	/** Returns a collection of records */
	allIdeas: Array<IdeaRecord>;
	/** Returns a collection of records */
	allLegals: Array<LegalRecord>;
	/** Returns a collection of records */
	allPersonalizedCollections: Array<PersonalizedCollectionRecord>;
	/** Returns a collection of records */
	allRoutes: Array<RouteRecord>;
	/** Returns a collection of records */
	allSectors: Array<SectorRecord>;
	/** Returns a collection of records */
	allServices: Array<ServiceRecord>;
	/** Returns a collection of assets */
	allUploads: Array<FileField>;
	/** Returns the single instance record */
	capabilitiesPage?: Maybe<CapabilitiesPageRecord>;
	/** Returns a specific record */
	caseStudy?: Maybe<CaseStudyRecord>;
	/** Returns a specific record */
	client?: Maybe<ClientRecord>;
	/** Returns the single instance record */
	fourOFour?: Maybe<FourOFourRecord>;
	/** Returns the single instance record */
	home?: Maybe<HomeRecord>;
	/** Returns a specific record */
	idea?: Maybe<IdeaRecord>;
	/** Returns the single instance record */
	ideasCollectionPage?: Maybe<IdeasCollectionPageRecord>;
	/** Returns a specific record */
	legal?: Maybe<LegalRecord>;
	/** Returns the single instance record */
	navigation?: Maybe<NavigationRecord>;
	/** Returns a specific record */
	personalizedCollection?: Maybe<PersonalizedCollectionRecord>;
	/** Returns a specific record */
	route?: Maybe<RouteRecord>;
	/** Returns the single instance record */
	screensaver?: Maybe<ScreensaverRecord>;
	/** Returns a specific record */
	sector?: Maybe<SectorRecord>;
	/** Returns a specific record */
	service?: Maybe<ServiceRecord>;
	/** Returns the single instance record */
	social?: Maybe<SocialRecord>;
	/** Returns a specific asset */
	upload?: Maybe<FileField>;
};

/** The query root for this schema */
export type Query_AllCaseStudiesMetaArgs = {
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllClientsMetaArgs = {
	filter?: InputMaybe<ClientModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllIdeasMetaArgs = {
	filter?: InputMaybe<IdeaModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLegalsMetaArgs = {
	filter?: InputMaybe<LegalModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPersonalizedCollectionsMetaArgs = {
	filter?: InputMaybe<PersonalizedCollectionModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllRoutesMetaArgs = {
	filter?: InputMaybe<RouteModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSectorsMetaArgs = {
	filter?: InputMaybe<SectorModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllServicesMetaArgs = {
	filter?: InputMaybe<ServiceModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAboutArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllCaseStudiesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllClientsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ClientModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllIdeasArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<IdeaModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<IdeaModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllLegalsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<LegalModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<LegalModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllPersonalizedCollectionsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PersonalizedCollectionModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PersonalizedCollectionModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllRoutesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<RouteModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<RouteModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllSectorsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<SectorModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<SectorModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllServicesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ServiceModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryCapabilitiesPageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryCaseStudyArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryClientArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ClientModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryFourOFourArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryHomeArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryIdeaArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<IdeaModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<IdeaModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryIdeasCollectionPageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryLegalArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<LegalModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<LegalModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryNavigationArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPersonalizedCollectionArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PersonalizedCollectionModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PersonalizedCollectionModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryRouteArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<RouteModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<RouteModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryScreensaverArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QuerySectorArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<SectorModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<SectorModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryServiceArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ServiceModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySocialArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type RecapBlockModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type Recap Block (recap_block) */
export type RecapBlockRecord = RecordInterface & {
	__typename?: 'RecapBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	label?: Maybe<Scalars['String']['output']>;
	link?: Maybe<RecapBlockModelLinkField>;
};

/** Block of type Recap Block (recap_block) */
export type RecapBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Recap Block (recap_block) */
export type RecapBlockRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecapModelRecapField = BigRecapBlockRecord | RecapBlockRecord;

/** Block of type Recap (recap) */
export type RecapRecord = RecordInterface & {
	__typename?: 'RecapRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	recap: Array<RecapModelRecapField>;
};

/** Block of type Recap (recap) */
export type RecapRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
};

export type RecordInterface_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
	/** Search uploads with the specified resolution */
	eq?: InputMaybe<ResolutionType>;
	/** Search uploads with the specified resolutions */
	in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
	/** Exclude uploads with the specified resolution */
	neq?: InputMaybe<ResolutionType>;
	/** Search uploads without the specified resolutions */
	notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
	Icon = 'icon',
	Large = 'large',
	Medium = 'medium',
	Small = 'small'
}

export type ResponsiveImage = {
	__typename?: 'ResponsiveImage';
	alt?: Maybe<Scalars['String']['output']>;
	aspectRatio: Scalars['FloatType']['output'];
	base64?: Maybe<Scalars['String']['output']>;
	bgColor?: Maybe<Scalars['String']['output']>;
	height: Scalars['IntType']['output'];
	sizes: Scalars['String']['output'];
	src: Scalars['String']['output'];
	srcSet: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	webpSrcSet: Scalars['String']['output'];
	width: Scalars['IntType']['output'];
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecord = RecordInterface & {
	__typename?: 'ResponsiveTextRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	desktop?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	laptop?: Maybe<Scalars['String']['output']>;
	mobile?: Maybe<Scalars['String']['output']>;
	tablet?: Maybe<Scalars['String']['output']>;
	tv?: Maybe<Scalars['String']['output']>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecordDesktopArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecordLaptopArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecordMobileArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecordTabletArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Responsive Text (responsive_text) */
export type ResponsiveTextRecordTvArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Rive (rive) */
export type RiveRecord = RecordInterface & {
	__typename?: 'RiveRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	rive?: Maybe<FileField>;
	riveMobileImage?: Maybe<FileField>;
	stateMachines: Array<StateRecord>;
};

/** Block of type Rive (rive) */
export type RiveRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type RouteModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<RouteModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<RouteModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	pageName?: InputMaybe<StringFilter>;
	slug?: InputMaybe<StringFilter>;
};

export enum RouteModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PageNameAsc = 'pageName_ASC',
	PageNameDesc = 'pageName_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC'
}

/** Record of type Routes (route) */
export type RouteRecord = RecordInterface & {
	__typename?: 'RouteRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	pageName?: Maybe<Scalars['String']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
};

/** Record of type Routes (route) */
export type RouteRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Screensaver (screensaver) */
export type ScreensaverRecord = RecordInterface & {
	__typename?: 'ScreensaverRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	screensaver?: Maybe<FileField>;
};

/** Record of type Screensaver (screensaver) */
export type ScreensaverRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Screensaver (screensaver) */
export type ScreensaverRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SectorModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<SectorModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<SectorModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	name?: InputMaybe<StringFilter>;
	position?: InputMaybe<PositionFilter>;
};

export enum SectorModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PositionAsc = 'position_ASC',
	PositionDesc = 'position_DESC'
}

/** Record of type Sectors (sector) */
export type SectorRecord = RecordInterface & {
	__typename?: 'SectorRecord';
	_allReferencingCaseStudies: Array<CaseStudyRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingCaseStudiesMeta: CollectionMetadata;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	name?: Maybe<Scalars['String']['output']>;
	position?: Maybe<Scalars['IntType']['output']>;
};

/** Record of type Sectors (sector) */
export type SectorRecord_AllReferencingCaseStudiesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndSector>;
};

/** Record of type Sectors (sector) */
export type SectorRecord_AllReferencingCaseStudiesMetaArgs = {
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndSector>;
};

/** Record of type Sectors (sector) */
export type SectorRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
	__typename?: 'SeoField';
	description?: Maybe<Scalars['String']['output']>;
	image?: Maybe<FileField>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type ServiceModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	name?: InputMaybe<StringFilter>;
	position?: InputMaybe<PositionFilter>;
};

export enum ServiceModelOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	IsValidAsc = '_isValid_ASC',
	IsValidDesc = '_isValid_DESC',
	PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	PublishedAtAsc = '_publishedAt_ASC',
	PublishedAtDesc = '_publishedAt_DESC',
	StatusAsc = '_status_ASC',
	StatusDesc = '_status_DESC',
	UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PositionAsc = 'position_ASC',
	PositionDesc = 'position_DESC'
}

/** Record of type Services (service) */
export type ServiceRecord = RecordInterface & {
	__typename?: 'ServiceRecord';
	_allReferencingAbouts: Array<AboutRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingAboutsMeta: CollectionMetadata;
	_allReferencingCapabilitiesPages: Array<CapabilitiesPageRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingCapabilitiesPagesMeta: CollectionMetadata;
	_allReferencingCaseStudies: Array<CaseStudyRecord>;
	/** Returns meta information regarding a record collection */
	_allReferencingCaseStudiesMeta: CollectionMetadata;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	name?: Maybe<Scalars['String']['output']>;
	position?: Maybe<Scalars['IntType']['output']>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingAboutsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<AboutModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingAboutsMetaArgs = {
	filter?: InputMaybe<AboutModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingCapabilitiesPagesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CapabilitiesPageModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CapabilitiesPageModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCapabilitiesPageAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingCapabilitiesPagesMetaArgs = {
	filter?: InputMaybe<CapabilitiesPageModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCapabilitiesPageAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingCaseStudiesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_AllReferencingCaseStudiesMetaArgs = {
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	through?: InputMaybe<InverseRelationshipFilterBetweenCaseStudyAndService>;
};

/** Record of type Services (service) */
export type ServiceRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type SideBySideModelSideBySideField =
	| CarouselRecord
	| MediaBlockRecord
	| RiveRecord
	| TextSectionRecord;

/** Block of type Side by Side (side_by_side) */
export type SideBySideRecord = RecordInterface & {
	__typename?: 'SideBySideRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	sideBySide: Array<SideBySideModelSideBySideField>;
};

/** Block of type Side by Side (side_by_side) */
export type SideBySideRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type Site = {
	__typename?: 'Site';
	favicon?: Maybe<FileField>;
	faviconMetaTags: Array<Tag>;
	globalSeo?: Maybe<GlobalSeoField>;
	locales: Array<SiteLocale>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
};

export type SiteFaviconMetaTagsArgs = {
	variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
	En = 'en'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that have one of the specified slugs */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do have one of the specified slugs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Block of type Social Media (social_media_block) */
export type SocialMediaBlockRecord = RecordInterface & {
	__typename?: 'SocialMediaBlockRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	link?: Maybe<Scalars['String']['output']>;
	socialMedia?: Maybe<Scalars['String']['output']>;
};

/** Block of type Social Media (social_media_block) */
export type SocialMediaBlockRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Socials (social) */
export type SocialRecord = RecordInterface & {
	__typename?: 'SocialRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	socialMedia: Array<SocialMediaBlockRecord>;
};

/** Record of type Socials (social) */
export type SocialRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type State (state) */
export type StateRecord = RecordInterface & {
	__typename?: 'StateRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	state?: Maybe<Scalars['String']['output']>;
};

/** Block of type State (state) */
export type StateRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
	/** Search the record with the specified status */
	eq?: InputMaybe<ItemStatus>;
	/** Search records with the specified statuses */
	in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
	/** Exclude the record with the specified status */
	neq?: InputMaybe<ItemStatus>;
	/** Search records without the specified statuses */
	notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that equal one of the specified values */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do not equal one of the specified values */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
	caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
	pattern: Scalars['String']['input'];
	regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or single empty paragraph) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
	__typename?: 'Tag';
	attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
	content?: Maybe<Scalars['String']['output']>;
	tag: Scalars['String']['output'];
};

/** Specifies how to filter text fields */
export type TextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type Text Section (text_section) */
export type TextSectionRecord = RecordInterface & {
	__typename?: 'TextSectionRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	title?: Maybe<Scalars['String']['output']>;
};

/** Block of type Text Section (text_section) */
export type TextSectionRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Text Section (text_section) */
export type TextSectionRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
	/** Search uploads with the specified type */
	eq?: InputMaybe<UploadType>;
	/** Search uploads with the specified types */
	in?: InputMaybe<Array<InputMaybe<UploadType>>>;
	/** Exclude uploads with the specified type */
	neq?: InputMaybe<UploadType>;
	/** Search uploads without the specified types */
	notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
	/** Search the uploads with the specified alt */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search uploads with the specified values as default alt */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the uploads with the specified alt */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search uploads that do not have the specified values as default alt */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
	/** Filter uploads that have all of the specified colors */
	allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that have at least one of the specified colors */
	anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that have the specified colors */
	contains?: InputMaybe<ColorBucketType>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that do not have any of the specified colors */
	notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
	AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	_createdAt?: InputMaybe<UploadCreatedAtFilter>;
	_updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
	alt?: InputMaybe<UploadAltFilter>;
	author?: InputMaybe<UploadAuthorFilter>;
	basename?: InputMaybe<UploadBasenameFilter>;
	colors?: InputMaybe<UploadColorsFilter>;
	copyright?: InputMaybe<UploadCopyrightFilter>;
	filename?: InputMaybe<UploadFilenameFilter>;
	format?: InputMaybe<UploadFormatFilter>;
	height?: InputMaybe<UploadHeightFilter>;
	id?: InputMaybe<UploadIdFilter>;
	inUse?: InputMaybe<InUseFilter>;
	md5?: InputMaybe<UploadMd5Filter>;
	mimeType?: InputMaybe<UploadMimeTypeFilter>;
	notes?: InputMaybe<UploadNotesFilter>;
	orientation?: InputMaybe<OrientationFilter>;
	resolution?: InputMaybe<ResolutionFilter>;
	size?: InputMaybe<UploadSizeFilter>;
	smartTags?: InputMaybe<UploadTagsFilter>;
	tags?: InputMaybe<UploadTagsFilter>;
	title?: InputMaybe<UploadTitleFilter>;
	type?: InputMaybe<TypeFilter>;
	width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
	/** Search the asset with the specified format */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified formats */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified format */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified formats */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
	/** Search assets with the specified height */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified height */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified height */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified height */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
	/** Search the asset with the specified ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude the asset with the specified ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
	/** Search the asset with the specified MD5 */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified MD5s */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified MD5 */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified MD5s */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
	/** Search the asset with the specified mime type */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified mime types */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified mime type */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified mime types */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
	CreatedAtAsc = '_createdAt_ASC',
	CreatedAtDesc = '_createdAt_DESC',
	UpdatedAtAsc = '_updatedAt_ASC',
	UpdatedAtDesc = '_updatedAt_DESC',
	BasenameAsc = 'basename_ASC',
	BasenameDesc = 'basename_DESC',
	FilenameAsc = 'filename_ASC',
	FilenameDesc = 'filename_DESC',
	FormatAsc = 'format_ASC',
	FormatDesc = 'format_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	ResolutionAsc = 'resolution_ASC',
	ResolutionDesc = 'resolution_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
	Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
	/** Search assets with the specified size (in bytes) */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified size (in bytes) */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified size (in bytes) */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified size (in bytes) */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
	/** Filter uploads linked to all of the specified tags */
	allIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to at least one of the specified tags */
	anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to the specified tag */
	contains?: InputMaybe<Scalars['String']['input']>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads not linked to any of the specified tags */
	notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
	/** Search the asset with the specified title */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter assets with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search assets with the specified as default title */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified title */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified as default title */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
	Archive = 'archive',
	Audio = 'audio',
	Image = 'image',
	Pdfdocument = 'pdfdocument',
	Presentation = 'presentation',
	Richtext = 'richtext',
	Spreadsheet = 'spreadsheet',
	Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
	__typename?: 'UploadVideoField';
	alt?: Maybe<Scalars['String']['output']>;
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	duration?: Maybe<Scalars['Int']['output']>;
	framerate?: Maybe<Scalars['Int']['output']>;
	height: Scalars['IntType']['output'];
	mp4Url?: Maybe<Scalars['String']['output']>;
	muxAssetId: Scalars['String']['output'];
	muxPlaybackId: Scalars['String']['output'];
	streamingUrl: Scalars['String']['output'];
	thumbhash?: Maybe<Scalars['String']['output']>;
	thumbnailUrl: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	width: Scalars['IntType']['output'];
};

export type UploadVideoFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type UploadVideoFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type UploadVideoFieldMp4UrlArgs = {
	exactRes?: InputMaybe<VideoMp4Res>;
	res?: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
	format?: InputMaybe<MuxThumbnailFormatType>;
};

export type UploadVideoFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
	/** Search assets with the specified width */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified width */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified width */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified width */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

export enum VideoMp4Res {
	High = 'high',
	Low = 'low',
	Medium = 'medium'
}

export type FocalPoint = {
	__typename?: 'focalPoint';
	x: Scalars['FloatType']['output'];
	y: Scalars['FloatType']['output'];
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
	__typename?: '__Directive';
	name: Scalars['String']['output'];
	description?: Maybe<Scalars['String']['output']>;
	isRepeatable: Scalars['Boolean']['output'];
	locations: Array<__DirectiveLocation>;
	args: Array<__InputValue>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
	includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
	/** Location adjacent to a query operation. */
	Query = 'QUERY',
	/** Location adjacent to a mutation operation. */
	Mutation = 'MUTATION',
	/** Location adjacent to a subscription operation. */
	Subscription = 'SUBSCRIPTION',
	/** Location adjacent to a field. */
	Field = 'FIELD',
	/** Location adjacent to a fragment definition. */
	FragmentDefinition = 'FRAGMENT_DEFINITION',
	/** Location adjacent to a fragment spread. */
	FragmentSpread = 'FRAGMENT_SPREAD',
	/** Location adjacent to an inline fragment. */
	InlineFragment = 'INLINE_FRAGMENT',
	/** Location adjacent to a variable definition. */
	VariableDefinition = 'VARIABLE_DEFINITION',
	/** Location adjacent to a schema definition. */
	Schema = 'SCHEMA',
	/** Location adjacent to a scalar definition. */
	Scalar = 'SCALAR',
	/** Location adjacent to an object type definition. */
	Object = 'OBJECT',
	/** Location adjacent to a field definition. */
	FieldDefinition = 'FIELD_DEFINITION',
	/** Location adjacent to an argument definition. */
	ArgumentDefinition = 'ARGUMENT_DEFINITION',
	/** Location adjacent to an interface definition. */
	Interface = 'INTERFACE',
	/** Location adjacent to a union definition. */
	Union = 'UNION',
	/** Location adjacent to an enum definition. */
	Enum = 'ENUM',
	/** Location adjacent to an enum value definition. */
	EnumValue = 'ENUM_VALUE',
	/** Location adjacent to an input object type definition. */
	InputObject = 'INPUT_OBJECT',
	/** Location adjacent to an input object field definition. */
	InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
	__typename?: '__EnumValue';
	name: Scalars['String']['output'];
	description?: Maybe<Scalars['String']['output']>;
	isDeprecated: Scalars['Boolean']['output'];
	deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
	__typename?: '__Field';
	name: Scalars['String']['output'];
	description?: Maybe<Scalars['String']['output']>;
	args: Array<__InputValue>;
	type: __Type;
	isDeprecated: Scalars['Boolean']['output'];
	deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
	includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
	__typename?: '__InputValue';
	name: Scalars['String']['output'];
	description?: Maybe<Scalars['String']['output']>;
	type: __Type;
	/** A GraphQL-formatted string representing the default value for this input value. */
	defaultValue?: Maybe<Scalars['String']['output']>;
	isDeprecated: Scalars['Boolean']['output'];
	deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
	__typename?: '__Schema';
	description?: Maybe<Scalars['String']['output']>;
	/** A list of all types supported by this server. */
	types: Array<__Type>;
	/** The type that query operations will be rooted at. */
	queryType: __Type;
	/** If this server supports mutation, the type that mutation operations will be rooted at. */
	mutationType?: Maybe<__Type>;
	/** If this server support subscription, the type that subscription operations will be rooted at. */
	subscriptionType?: Maybe<__Type>;
	/** A list of all directives supported by this server. */
	directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
	__typename?: '__Type';
	kind: __TypeKind;
	name?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	specifiedByURL?: Maybe<Scalars['String']['output']>;
	fields?: Maybe<Array<__Field>>;
	interfaces?: Maybe<Array<__Type>>;
	possibleTypes?: Maybe<Array<__Type>>;
	enumValues?: Maybe<Array<__EnumValue>>;
	inputFields?: Maybe<Array<__InputValue>>;
	ofType?: Maybe<__Type>;
	isOneOf?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
	includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
	includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
	includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
	/** Indicates this type is a scalar. */
	Scalar = 'SCALAR',
	/** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
	Object = 'OBJECT',
	/** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
	Interface = 'INTERFACE',
	/** Indicates this type is a union. `possibleTypes` is a valid field. */
	Union = 'UNION',
	/** Indicates this type is an enum. `enumValues` is a valid field. */
	Enum = 'ENUM',
	/** Indicates this type is an input object. `inputFields` is a valid field. */
	InputObject = 'INPUT_OBJECT',
	/** Indicates this type is a list. `ofType` is a valid field. */
	List = 'LIST',
	/** Indicates this type is a non-null. `ofType` is a valid field. */
	NonNull = 'NON_NULL'
}

export type CatFragmentQueryVariables = Exact<{ [key: string]: never }>;

export type CatFragmentQuery = { __typename?: 'Query'; __schema: { __typename: '__Schema' } };

export type CatQueryQueryVariables = Exact<{ [key: string]: never }>;

export type CatQueryQuery = { __typename?: 'Query'; __schema: { __typename: '__Schema' } };

export const CatFragmentDocument = gql`
	query CatFragment {
		__schema {
			__typename
		}
	}
`;
export const CatQueryDocument = gql`
	query CatQuery {
		__schema {
			__typename
		}
	}
`;

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
	operationType?: string,
	variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
	action();
const CatFragmentDocumentString = print(CatFragmentDocument);
const CatQueryDocumentString = print(CatQueryDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
	return {
		CatFragment(
			variables?: CatFragmentQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders
		): Promise<{
			data: CatFragmentQuery;
			errors?: GraphQLError[];
			extensions?: any;
			headers: Headers;
			status: number;
		}> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.rawRequest<CatFragmentQuery>(CatFragmentDocumentString, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'CatFragment',
				'query',
				variables
			);
		},
		CatQuery(
			variables?: CatQueryQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders
		): Promise<{
			data: CatQueryQuery;
			errors?: GraphQLError[];
			extensions?: any;
			headers: Headers;
			status: number;
		}> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.rawRequest<CatQueryQuery>(CatQueryDocumentString, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'CatQuery',
				'query',
				variables
			);
		}
	};
}
export type Sdk = ReturnType<typeof getSdk>;
