import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
export class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: []
            },] }
];
ApiModule.ctorParameters = () => [
    { type: ApiModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBWWxELE1BQU0sT0FBTyxTQUFTO0lBUWxCLFlBQXFDLFlBQXVCLEVBQ25DLElBQWdCO1FBQ3JDLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStEO2dCQUMvRSwwREFBMEQsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQWhCTSxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUF5QztRQUMzRCxPQUFPO1lBQ0gsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFFO1NBQzlFLENBQUM7SUFDTixDQUFDOzs7WUFaSixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFPLEVBQUU7Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQU8sRUFBRTtnQkFDaEIsU0FBUyxFQUFFLEVBQUU7YUFDZDs7O1lBU3NELFNBQVMsdUJBQTlDLFFBQVEsWUFBSSxRQUFRO1lBcEI3QixVQUFVLHVCQXFCRCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBQZXRTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vYXBpL3VzZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6ICAgICAgW10sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQXBpTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IENvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFwaU1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IENvbmZpZ3VyYXRpb24sIHVzZUZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5IH0gXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFwaU1vZHVsZSxcbiAgICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwaU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWh0dHApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBIdHRwQ2xpZW50TW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISBcXG4nICtcbiAgICAgICAgICAgICdTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDU3NScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19