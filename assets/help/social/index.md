
## Community 
- Community has collection of activities

```ts
class Community {
    subject: string;
    body: string;
    type: string; 
    icon: string; // named icon
    pic: {
        url: string;
        data: string;
    };
    order: number, // order in which the the communities would be sorted
    location: {
        coordinates: [<longitude>, <latitude>],
        name: String,
        description: String,
    },

    isPublic: boolean; // if the community visible to others. such communities can be joined by invitation only. Only admin can set/unset this flag
    isDefault: boolean; // if the community is forced on users, only admin can set/unset this flag

    owner: User; // the person who would manage the community
    followers: Community[];
    following: Community[];

    feeds: { url: string }[];

    interests: Interest[];

    members: [{
        isAdmin: boolean,
        isModerator: boolean,
        status: String, // waiting (only in default community), active, invited, blocked, muted
        date: Date,
        user: User;
    }];

    organization: Organization;

    status: string; // active, in-active
}

```



## Activity 

```ts
class Activity {
    subject: string;
    body: string;
    type: string; // post, event, task
    icon: string; // named icon
    pic: {
        url: string;
        data: string;
    };
    date: Date;
    schedule: Schedule;
    location: {
        coordinates: number[],
        name: String,
        description: String,
    },

    isPublic: boolean;
    isDefault: boolean;

    owner: User;
    community: Community;

    participants: [{
        status: string; // invited, participant, disliked
        date: Date;
        user: User;
    }];

    status: string; // draft, active, in-active
}
```

## Base Components

```ts
class DriveFileListBaseComponent {
    @Input()
    community: Community;

    /*
        default: false
    */
    @Input()
    readonly: boolean;

    /*
        sort the docs by date
    */
    @Input()
    sort: string; 

    @Output()
    created: EventEmitter<Activity>;

    items: Activity[];
    // ... paging components
```

```ts
class NewActivityBaseComponent {
    @Input()
    community: Community;

    @Output()
    created: EventEmitter<Activity>;

    properties: Activity; 

```

```ts
class ActivityDetailBaseComponent {

    @Output()
    created: EventEmitter<Activity>;

    @Input()
    readonly: boolean;

    properties: Activity; 

```
## Components

### Activity Creator

```html
<social-activity-creator (created)="onCreate($event)"></social-activity-creator>
```

### Activity Editor/Details

```html
<social-activity-detail [properties]="activity" [readonly]="true"></social-activity-detail>
```

### Activity List
```html
<social-activity-list [community]="community"></social-activity-list>
```
