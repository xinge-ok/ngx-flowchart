import { AfterViewInit, ComponentFactoryResolver, ElementRef, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { FcCallbacks, FcConnector, FcNode, FcNodeComponentConfig, FcNodeRectInfo, UserNodeCallbacks } from './ngx-flowchart.models';
import { FcModelService } from './model.service';
export declare class FcNodeContainerComponent implements OnInit, AfterViewInit, OnChanges {
    private nodeComponentConfig;
    private elementRef;
    private componentFactoryResolver;
    callbacks: FcCallbacks;
    userNodeCallbacks: UserNodeCallbacks;
    node: FcNode;
    selected: boolean;
    edit: boolean;
    underMouse: boolean;
    mouseOverConnector: FcConnector;
    modelservice: FcModelService;
    dragging: boolean;
    readonly nodeId: string;
    readonly top: string;
    readonly left: string;
    nodeComponent: FcNodeComponent;
    nodeContentContainer: ViewContainerRef;
    constructor(nodeComponentConfig: FcNodeComponentConfig, elementRef: ElementRef<HTMLElement>, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateNodeClass;
    private updateNodeComponent;
    private toggleClass;
    mousedown(event: MouseEvent): void;
    dragstart(event: DragEvent): void;
    dragend(event: DragEvent): void;
    click(event: MouseEvent): void;
    mouseover(event: MouseEvent): void;
    mouseout(event: MouseEvent): void;
}
export declare abstract class FcNodeComponent implements OnInit {
    callbacks: FcCallbacks;
    userNodeCallbacks: UserNodeCallbacks;
    node: FcNode;
    selected: boolean;
    edit: boolean;
    underMouse: boolean;
    mouseOverConnector: FcConnector;
    modelservice: FcModelService;
    dragging: boolean;
    flowchartConstants: {
        htmlPrefix: string;
        leftConnectorType: string;
        rightConnectorType: string;
        curvedStyle: string;
        lineStyle: string;
        dragAnimationRepaint: string;
        dragAnimationShadow: string;
        canvasClass: string;
        selectedClass: string;
        editClass: string;
        activeClass: string;
        hoverClass: string;
        draggingClass: string;
        edgeClass: string;
        edgeLabelClass: string;
        connectorClass: string;
        magnetClass: string;
        nodeClass: string;
        nodeOverlayClass: string;
        leftConnectorClass: string;
        rightConnectorClass: string;
        canvasResizeThreshold: number;
        canvasResizeStep: number;
    };
    width: number;
    height: number;
    nodeRectInfo: FcNodeRectInfo;
    ngOnInit(): void;
}
